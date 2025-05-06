import {
    AutoMailerAppID,
    BeneficiaryApplicationFormAppID,
    BFPForYouMasterAppID,
    BFPHolidayAppID,
    BFPWikiAPIKey,
    BFPWikiAppID,
    BFPWikiSettingsAppID,
    ClientEmail,
    DailyAttendanceAppID,
    ErrorLogsAppID,
    FACApplicationAppID,
    FamilyAppID,
    FinancialObligationAppID,
    GoogleDriveAPIKey,
    HealthQuestionnaireAppID,
    IncomingDepartureChecklistAppID,
    JobDescriptionAppID,
    KintonePassword,
    KintoneUsername,
    LeaveRequestAppID,
    NetanyaReservationAppID,
    OnlineVolunteerApplicationAppID,
    PrivateKey,
    SDDReportsAppID,
    StaffFoodOrderAppID,
    VacationReportAppID,
    VolunteerApplicationAppID,
    VolunteerApplicationChecklistAppID,
    VolunteerProfileAppID,
    VolunteerReferenceAppID
} from '@/common/env';
import { kintoneClient } from '@/common/kintoneClient';
import { REST_VolunteerApplicationForm } from '@/types/VolunteerApplicationForm';
import { VolunteerProfile } from '@/types/VolunteerProfile';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import { drive_v3, google } from 'googleapis';
import { KintoneRestAPIClient } from '@kintone/rest-api-client';
import { fileTypeFromBuffer } from 'file-type';
import { Readable } from 'stream';

export const maxDuration = 30; //max seconds. Vercel config

const AppIds = [
    LeaveRequestAppID,
    BFPHolidayAppID,
    DailyAttendanceAppID,
    VolunteerApplicationAppID,
    HealthQuestionnaireAppID,
    VolunteerReferenceAppID,
    VolunteerApplicationChecklistAppID,
    VolunteerProfileAppID,
    FinancialObligationAppID,
    OnlineVolunteerApplicationAppID,
    IncomingDepartureChecklistAppID,
    SDDReportsAppID,
    FamilyAppID,
    JobDescriptionAppID,
    BeneficiaryApplicationFormAppID,
    FACApplicationAppID,
    BFPForYouMasterAppID,
    ErrorLogsAppID,
    BFPWikiAppID,
    AutoMailerAppID,
    BFPWikiSettingsAppID,
    StaffFoodOrderAppID,
    NetanyaReservationAppID
] as const;
const AppId = 16;

// Escape function to handle quotes and commas
function escapeCsvValue(value: string | number | boolean | null | undefined): string {
    if (value === null || value === undefined) return '""'; // Handle null or undefined
    const stringValue = value.toString();
    // Escape double quotes by doubling them and wrap the value in quotes
    return `"${stringValue.replace(/"/g, '""')}"`;
}

// refer to: https://jp.cybozu.help/k/ja/app/data/import_records/create_csv.html

/**
 * periodic backup of kintone records
 * @returns
 */
export async function GET() {
    // create a new folder in google drive under the folder id: 172x2-BMZWnMs9UAK7351vU58Qwxclv92
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: ClientEmail,
            private_key: PrivateKey
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/drive.metadata'
        ]
    });
    // Initialize Google Drive API client
    const drive = google.drive({ version: 'v3', auth: auth });
    const createTodayFolder = async () => {
        // today as date witouh hyphn
        const today = new Date().toISOString().split('T')[0].replace(/-/g, ''); // Use the current date as the folder name
        // Check if the folder already exists
        const alreadyEcists = await drive.files.list({
            q: `mimeType='application/vnd.google-apps.folder' and name='${today}'`,
            fields: 'files(id, name)',
            supportsAllDrives: true // Use this option to support shared drives
        });
        const files = alreadyEcists.data.files;
        if (files?.length && files.length > 0) {
            // return the first folder ID found
            return files[0].id;
        }
        // If the folder doesn't exist, create it
        const folderMetadata = {
            name: today, // Folder name
            mimeType: 'application/vnd.google-apps.folder', // MIME type for folders
            parents: ['172x2-BMZWnMs9UAK7351vU58Qwxclv92'] // Parent folder ID (optional)
        };
        // Create the folder in Google Drive
        const folderResponse = await drive.files.create({
            requestBody: folderMetadata,
            fields: 'id',
            supportsAllDrives: true // Use this option to support shared drives
        });
        return folderResponse.data.id; // Return the ID of the created folder
    };
    const todayFolderId = await createTodayFolder();
    if (!todayFolderId) {
        return new Response('Failed to create folder', {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    console.log('today folderId', todayFolderId);
    try {
        const promiseArray = AppIds.map((AppId) =>
            (async () => {
                try {
                    if (!AppId) return;
                    const client = kintoneClient as KintoneRestAPIClient;
                    const formFields = await client.app.getFormFields({
                        app: AppId
                    });
                    const headers = [
                        ...Object.values(formFields.properties)
                            .filter((field) => field) // Only include enabled fields
                            .map((field) => {
                                // checkbox
                                if (field.type === 'CHECK_BOX') {
                                    return Object.keys(field.options)
                                        .map((key) => escapeCsvValue(`${field.label}[${key}]`))
                                        .join(',');
                                } else if (field.type === 'SUBTABLE') {
                                    return Object.keys(field.fields)
                                        .map((key) => escapeCsvValue(key))
                                        .join(',');
                                } else return escapeCsvValue(field.label);
                            })
                    ]; // Extract labels for headers

                    // fetch records from kintone

                    const records = await client.record.getAllRecords<REST_VolunteerApplicationForm>({
                        app: AppId
                    });

                    // Generate CSV content
                    const csvRows = [];
                    // keep fileKeys for file upload
                    const fileKeys: string[] = [];

                    // Add a header for the first column
                    csvRows.push(['New Record', ...headers].join(',')); // Add headers as the first row

                    /**
                     * @example record = { [fieldCode]: { value: string } }
                     */
                    const OBJECT_RECORD_TYPE = [''];
                    /**
                     * @example records = { [fieldCode]: [{ code: string, name: string }] }
                     */
                    const ARRAYOF_SELECT_RECORD_TYPE = ['ORGANIZATION_SELECT', 'GROUP_SELECT'];
                    /**
                     * @example record = { [fieldCode]: { value: { code: string, name: string } } }
                     */
                    const USER_TYPE = ['CREATOR', 'MODIFIER'];
                    /**
                     * @example records = { [fieldCode]: { value: [{ code: string, name: string }] } }
                     */
                    const MULTIPLE_USER_TYPE = ['USER_SELECT', 'STATUS_ASSIGNEE', 'MODIFIER'];
                    /**
                     * @example records = { [fieldCode]: { value: [{ fileKey: string, contentType: string, name: string, size: string }] } }
                     */
                    const FILE_TYPE = ['FILE'];
                    /**
                     * @example records = { [fieldCode]: { value: [{ fileKey: string, contentType: string, name: string, size: string }] } }
                     */
                    const SUBTABLE_TYPE = ['SUBTABLE'];
                    for (const record of records) {
                        // Add the original record first, with * in the first column
                        const originalRow = Object.values(formFields.properties)
                            .filter((field) => field) // Only include enabled fields
                            .flatMap((field) => {
                                const code = field.code as keyof REST_VolunteerApplicationForm;
                                if (!record[code]) {
                                    return [];
                                }
                                if (field.type === 'CHECK_BOX') {
                                    return Object.keys(field.options).map((key) => (record[code].value.includes(key) ? '1' : '0'));
                                } else if (USER_TYPE.includes(field.type)) {
                                    return escapeCsvValue((record[code].value as { code: string; name: string }).code);
                                } else if (MULTIPLE_USER_TYPE.includes(field.type)) {
                                    return escapeCsvValue(
                                        (record[code].value as Array<{ code: string; name: string }>).map((item) => item.code).join('\n')
                                    );
                                } else if (ARRAYOF_SELECT_RECORD_TYPE.includes(field.type)) {
                                    return escapeCsvValue(
                                        (record[code].value as Array<{ code: string; name: string }>).map((item) => item.code).join('\n')
                                    );
                                } else if (FILE_TYPE.includes(field.type)) {
                                    return escapeCsvValue(
                                        (record[code].value as Array<{ fileKey: string; contentType: string; name: string; size: string }>)
                                            .map((item) => {
                                                fileKeys.push(item.fileKey); // keep fileKeys for file upload
                                                return item.fileKey;
                                            })
                                            .join('\n')
                                    );
                                } else if (field.type === 'SUBTABLE') {
                                    // TODO: now it's only for string values, need to handle other types eg. File, User etc.
                                    return Object.keys(field.fields).map((key) => escapeCsvValue(record[code].value[0]?.value[key].value));
                                } else return escapeCsvValue(record[code]?.value || '');
                            });
                        csvRows.push(['*', ...originalRow].join(',')); // Add the original record with "*" in the first column

                        // add rows for each table fields
                        // get max length of subtable fields
                        const maxSubtableLength = Object.values(formFields.properties).reduce((max, field) => {
                            if (field.type === 'SUBTABLE') {
                                const code = field.code as keyof REST_VolunteerApplicationForm;
                                const fieldValue = record[code]?.value as unknown as Array<{ id: string; value: { [key: string]: any } }>;
                                return Math.max(max, fieldValue?.length || 0);
                            }
                            return max;
                        }, 0);
                        // length -1 because the first row is already added
                        const tableRows = Array.from({ length: maxSubtableLength - 1 }).map((_, index) => {
                            const newRow = Object.values(formFields.properties)
                                .filter((field) => field) // Only include enabled fields
                                .flatMap((field) => {
                                    const code = field.code as keyof REST_VolunteerApplicationForm;
                                    if (field.type === 'CHECK_BOX') {
                                        return Object.keys(field.options).map((key) => '');
                                    } else if (SUBTABLE_TYPE.includes(field.type)) {
                                        if (!record[code].value[index + 1]) {
                                            if (!record[code].value[0]?.value) return;
                                            // if no subtable data, return empty string
                                            return Object.keys(record[code].value[0]?.value).map((key) => '');
                                        }
                                        // index+1 because the first row is already added
                                        const fieldValue = record[code].value[index + 1].value as { [key: string]: any };
                                        // Handle subtable fields. TODO: only string values are handled now, need to handle other types eg. File, User etc.
                                        return Object.values(fieldValue).map((value) => escapeCsvValue(value.value || ''));
                                    } else return '';
                                });
                            return ['', ...newRow]; // Add the new row with a blank first column
                        });
                        csvRows.push(...tableRows.map((row) => row.join(','))); // Add the new rows to the CSV
                    }

                    const csvContent = csvRows.join('\n');
                    await handleFiles(fileKeys, drive, AppId);
                    console.log('files done!');
                    await handleCsvFile(drive, csvContent, AppId, todayFolderId);
                    console.log('csv done!');
                    // Return the CSV file as a response
                    return new Response(csvContent, {
                        status: 200,
                        headers: {
                            'Content-Type': 'text/csv;charset=utf-8',
                            'Content-Disposition': 'attachment; filename="backup.csv"'
                        }
                    });
                } catch (error: any) {
                    console.error('Error processing app:', AppId, error);
                    if (error.errors) {
                        console.error('Error details:', error.errors);
                    }
                    return new Response('Error processing app: ' + AppId, {
                        status: 500,
                        headers: { 'Content-Type': 'application/json' }
                    });
                }
            })()
        );
        await Promise.allSettled(promiseArray);
        return new Response('ok', {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.log('error', error);
        return new Response(null, {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

const handleCsvFile = async (drive: drive_v3.Drive, csvContent: string, AppId: string, todayFolderId: string) => {
    try {
        // Create a new file in Google Drive
        const fileMetadata = {
            name: `${AppId}.csv`, // File name
            parents: [todayFolderId] // Specify the parent folder ID
        };

        // File content
        const media = {
            mimeType: 'text/csv',
            body: Readable.from(csvContent) // Use the CSV content as the file body
        };

        // Upload the file to Google Drive
        const response = await drive.files.create({
            requestBody: fileMetadata,
            media: media,
            fields: 'id'
        });

        // Respond with the uploaded file ID
        return response.data.id;
    } catch (error) {
        console.error('Error uploading CSV file to Google Drive:', error);
        throw new Error('Error uploading CSV file to Google Drive: ' + error);
    }
};

const ASSETS_FOLDER_ID = '1XCkXngdKkN0fOqXZr_Jxgx7fCRLmI_hb';
const handleFiles = async (fileKeys: any[], drive: drive_v3.Drive, AppId: string) => {
    // get id from folder names and get the folder id
    const folderName = AppId.toString(); // Replace with the desired folder name
    const folderId = await drive.files
        .list({
            q: `mimeType='application/vnd.google-apps.folder' and name='${folderName}' and '${ASSETS_FOLDER_ID}' in parents`,
            fields: 'files(id, name)'
        })
        .then((response) => {
            const files = response.data.files;
            if (files?.length && files.length > 0) {
                return files[0].id; // Return the first folder ID found
            } else {
                // create a new folder if not found and return the id
                return drive.files
                    .create({
                        requestBody: {
                            name: folderName,
                            mimeType: 'application/vnd.google-apps.folder'
                        },
                        fields: 'id'
                    })
                    .then((response) => {
                        return response.data.id; // Return the new folder ID
                    });
            }
        });

    if (!folderId) {
        return 'Folder not found: ' + folderName; // Return the first file ID found
    }
    const filePromises = fileKeys.map((fileKey) => {
        return new Promise(async (resolve) => {
            try {
                // find the file name = fileKey if exists return
                const isSameFileExists = await drive.files
                    .list({
                        q: `name='${fileKey}' and mimeType != 'application/vnd.google-apps.folder' and '${folderId}' in parents`,
                        fields: 'files(id, name)'
                    })
                    .then((response) => {
                        const files = response.data.files;
                        if (files?.length && files.length > 0) {
                            return true;
                        } else {
                            return false;
                        }
                    });
                if (isSameFileExists) {
                    return resolve('File already exists: ' + fileKey); // Return the first file ID found
                }
                console.log('proceeding');
                const client = kintoneClient as KintoneRestAPIClient;
                const file = await client.file.downloadFile({ fileKey });
                if (!file) {
                    return resolve('File not found: ' + fileKey); // Return the first file ID found
                }

                const buffer = Buffer.from(file); // Convert the file to a Buffer

                // Detect the MIME type using the file-type library
                const fileType = await fileTypeFromBuffer(buffer);
                const mimeType = fileType?.mime || 'application/octet-stream'; // Default to binary if MIME type is unknown

                // File metadata
                const fileMetadata = {
                    name: fileKey,
                    parents: [folderId] // Target folder ID
                };

                // File content
                const media = {
                    mimeType: mimeType,
                    body: Readable.from(buffer) // Use the buffer as the file body
                };

                // Upload the file to Google Drive
                const response = await drive.files.create({
                    requestBody: fileMetadata,
                    media: media,
                    fields: 'id'
                });

                // Respond with the uploaded file ID
                return resolve('File uploaded successfully: ' + response.data.id);
            } catch (e) {
                throw new Error('Error uploading file to Google Drive: ' + e);
            }
        });
    });
    return Promise.allSettled(filePromises);
};
