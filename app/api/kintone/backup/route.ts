import { VolunteerProfileAppID } from '@/common/env';
import { kintoneClient } from '@/common/kintoneClient';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

// Escape function to handle quotes and commas
function escapeCsvValue(value: string | number | boolean | null | undefined): string {
    if (value === null || value === undefined) return '""'; // Handle null or undefined
    const stringValue = value.toString();
    // Escape double quotes by doubling them and wrap the value in quotes
    return `"${stringValue.replace(/"/g, '""')}"`;
}

/**
 * periodic backup of kintone records
 * @returns
 */
export async function GET() {
    try {
        const client = kintoneClient;
        const formFields = await client.app.getFormFields({
            app: 16 //,VolunteerProfileAppID
        });
        const headers = [
            'New Record', // Add a header for the first column
            ...Object.values(formFields.properties)
                .filter((field) => field) // Only include enabled fields
                .map((field) => {
                    // checkbox
                    if (field.type === 'CHECK_BOX') {
                        return Object.keys(field.options)
                            .map((key) => `${field.label}[${key}]`)
                            .join(',');
                    } else return field.label;
                })
        ]; // Extract labels for headers

        // fetch records from kintone

        const records = await client.record.getAllRecords({
            app: 16, //VolunteerProfileAppID,
            condition: `$id = "196"`
        });

        // Generate CSV content
        const csvRows = [];
        csvRows.push(headers.join(',')); // Add headers as the first row

        /**
         * @example record = { [fieldCode]: { value: string } }
         */
        const OBJECT_RECORD_TYPES = [''];
        /**
         * @example records = { [fieldCode]: [{ code: string, name: string }] }
         */
        const MULTIPLE_OBJECT_RECORD_TYPES = ['ORGANIZATION_SELECT', 'GROUP_SELECT'];
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
            // Add the original record first
            const originalRow = headers.map((header) => {
                const fieldCode = Object.keys(formFields.properties).find((key) => formFields.properties[key].label === header);
                if (!fieldCode) return ''; // Skip if field code not found
                const fieldValue = record[fieldCode]?.value || '';
                if (fieldValue == '' || fieldValue === null || fieldValue === undefined) return '""'; // Handle null or undefined
                console.log('fieldValue', fieldValue);
                if (OBJECT_RECORD_TYPES.includes(formFields.properties[fieldCode].type)) {
                    return escapeCsvValue(fieldValue as string);
                }
                if (MULTIPLE_OBJECT_RECORD_TYPES.includes(formFields.properties[fieldCode].type)) {
                    // return escapeCsvValue((fieldValue as Array<{ code: string; name: string }>).map((item) => item.name).join(' '));
                }
                if (USER_TYPE.includes(formFields.properties[fieldCode].type)) {
                    return escapeCsvValue((fieldValue as { code: string; name: string }).name);
                }
                if (MULTIPLE_USER_TYPE.includes(formFields.properties[fieldCode].type)) {
                    // return escapeCsvValue((fieldValue as Array<{ code: string; name: string }>).map((item) => item.name).join(' '));
                }
                if (FILE_TYPE.includes(formFields.properties[fieldCode].type)) {
                    return escapeCsvValue(
                        (fieldValue as Array<{ fileKey: string; contentType: string; name: string; size: string }>).map((item) => item.name).join(' ')
                    );
                }
                if (SUBTABLE_TYPE.includes(formFields.properties[fieldCode].type)) {
                    return escapeCsvValue(
                        (fieldValue as Array<{ fileKey: string; contentType: string; name: string; size: string }>).map((item) => item.name).join(' ')
                    );
                }
                if (Array.isArray(fieldValue)) {
                    return escapeCsvValue((fieldValue as Array<{ code: string; name: string }>).map((item) => item.name).join(' '));
                }
                if (typeof fieldValue == 'string') return escapeCsvValue(fieldValue);
                return '';
            });
            csvRows.push(['*', ...originalRow].join(',')); // Add the original record with "*" in the first column

            // Process subtable fields and add rows
            headers.forEach((header) => {
                const fieldCode = Object.keys(formFields.properties).find((key) => formFields.properties[key].label === header);
                if (!fieldCode) return;

                const fieldType = formFields.properties[fieldCode].type;
                if (fieldType === 'SUBTABLE') {
                    const fieldValue = record[fieldCode]?.value as unknown as Array<{ id: string; value: { [key: string]: any } }>;
                    if (!fieldValue || fieldValue.length === 0) return; // Skip if no subtable data

                    // Process each row in the subtable
                    fieldValue.forEach((subtableRow) => {
                        const newRow = headers.map((header) => {
                            if (header === formFields.properties[fieldCode].label) {
                                const subtableValues = Object.entries(subtableRow.value)
                                    .map(([key, value]) => `${key}: ${value}`)
                                    .join(' ');
                                return escapeCsvValue(subtableValues);
                            }
                            return ''; // Skip other columns
                        });
                        csvRows.push(['', ...newRow].join(',')); // Add the subtable row with a blank first column
                    });
                }
            });
        }

        const csvContent = csvRows.join('\n');

        // Return the CSV file as a response
        return new Response(csvContent, {
            status: 200,
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': 'attachment; filename="backup.csv"'
            }
        });
    } catch (error) {
        console.log('error', error);
        return new Response(null, {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

export async function POST(request: Request) {
    // Parse the request body
    const body = await request.json();
    const { name } = body;

    // e.g. Insert new user into your DB
    const newUser = { id: Date.now(), name };

    return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });
}
