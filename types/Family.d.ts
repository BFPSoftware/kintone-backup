export interface Family {
    spouseFamilyName: kintone.fieldTypes.SingleLineText;
    fatherName: kintone.fieldTypes.SingleLineText;
    occupation: kintone.fieldTypes.SingleLineText;
    phoneIsrael: kintone.fieldTypes.SingleLineText;
    spouseFatherName: kintone.fieldTypes.SingleLineText;
    lastEntryPlace: kintone.fieldTypes.SingleLineText;
    ref: kintone.fieldTypes.Number;
    visaValidUntil: kintone.fieldTypes.Date;
    birthCountry: kintone.fieldTypes.SingleLineText;
    spousePreviousFamilyName: kintone.fieldTypes.SingleLineText;
    id: kintone.fieldTypes.SingleLineText;
    abroadCountry: kintone.fieldTypes.SingleLineText;
    previousFamilyName: kintone.fieldTypes.SingleLineText;
    DateOfBirth: kintone.fieldTypes.Date;
    motherMaidenName: kintone.fieldTypes.SingleLineText;
    spouseBirthday: kintone.fieldTypes.Date;
    motherName: kintone.fieldTypes.SingleLineText;
    firstName: kintone.fieldTypes.SingleLineText;
    employedName: kintone.fieldTypes.SingleLineText;
    nationality: kintone.fieldTypes.SingleLineText;
    addressIsraelTown: kintone.fieldTypes.SingleLineText;
    lastEntryDate: kintone.fieldTypes.Date;
    abroadTown: kintone.fieldTypes.SingleLineText;
    status: kintone.fieldTypes.DropDown;
    lastName: kintone.fieldTypes.SingleLineText;
    abroadSt: kintone.fieldTypes.SingleLineText;
    phoneHome: kintone.fieldTypes.SingleLineText;
    representativeOffice: kintone.fieldTypes.SingleLineText;
    entryPurpose: kintone.fieldTypes.DropDown;
    passportValid: kintone.fieldTypes.Date;
    relationship: kintone.fieldTypes.SingleLineText;
    addressIsraelSt: kintone.fieldTypes.SingleLineText;
    spouseNationality: kintone.fieldTypes.SingleLineText;
    citizenship: kintone.fieldTypes.SingleLineText;
    passportIssued: kintone.fieldTypes.SingleLineText;
    spouseFirstName: kintone.fieldTypes.SingleLineText;
    employedAddress: kintone.fieldTypes.SingleLineText;
    visaType: kintone.fieldTypes.DropDown;
    religion: kintone.fieldTypes.SingleLineText;
    middleName: kintone.fieldTypes.SingleLineText;

    photo: kintone.fieldTypes.File;
    entryExitRecord: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                entryExitEntryDate: kintone.fieldTypes.Date;
                entryExitExitReason: kintone.fieldTypes.SingleLineText;
                entryExitDays: kintone.fieldTypes.Number;
                entryExitEntryReason: kintone.fieldTypes.DropDown;
                entryExitVisaType: kintone.fieldTypes.DropDown;
                entryExitExitDate: kintone.fieldTypes.Date;
            };
        }>;
    };
}
export interface SavedFamily extends Family {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Updated_by: kintone.fieldTypes.Modifier;
    Created_by: kintone.fieldTypes.Creator;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
}
import { KintoneRecordField } from '@kintone/rest-api-client';

export type REST_Family = {
    spouseFamilyName: KintoneRecordField.SingleLineText;
    fatherName: KintoneRecordField.SingleLineText;
    occupation: KintoneRecordField.SingleLineText;
    phoneIsrael: KintoneRecordField.SingleLineText;
    spouseFatherName: KintoneRecordField.SingleLineText;
    lastEntryPlace: KintoneRecordField.SingleLineText;
    ref: KintoneRecordField.Number;
    visaValidUntil: KintoneRecordField.Date;
    birthCountry: KintoneRecordField.SingleLineText;
    spousePreviousFamilyName: KintoneRecordField.SingleLineText;
    id: KintoneRecordField.SingleLineText;
    abroadCountry: KintoneRecordField.SingleLineText;
    previousFamilyName: KintoneRecordField.SingleLineText;
    DateOfBirth: KintoneRecordField.Date;
    motherMaidenName: KintoneRecordField.SingleLineText;
    spouseBirthday: KintoneRecordField.Date;
    motherName: KintoneRecordField.SingleLineText;
    firstName: KintoneRecordField.SingleLineText;
    employedName: KintoneRecordField.SingleLineText;
    nationality: KintoneRecordField.SingleLineText;
    addressIsraelTown: KintoneRecordField.SingleLineText;
    lastEntryDate: KintoneRecordField.Date;
    abroadTown: KintoneRecordField.SingleLineText;
    status: KintoneRecordField.DropDown;
    lastName: KintoneRecordField.SingleLineText;
    abroadSt: KintoneRecordField.SingleLineText;
    phoneHome: KintoneRecordField.SingleLineText;
    representativeOffice: KintoneRecordField.SingleLineText;
    entryPurpose: KintoneRecordField.DropDown;
    passportValid: KintoneRecordField.Date;
    relationship: KintoneRecordField.SingleLineText;
    addressIsraelSt: KintoneRecordField.SingleLineText;
    spouseNationality: KintoneRecordField.SingleLineText;
    citizenship: KintoneRecordField.SingleLineText;
    passportIssued: KintoneRecordField.SingleLineText;
    spouseFirstName: KintoneRecordField.SingleLineText;
    employedAddress: KintoneRecordField.SingleLineText;
    visaType: KintoneRecordField.DropDown;
    religion: KintoneRecordField.SingleLineText;
    middleName: KintoneRecordField.SingleLineText;

    photo: KintoneRecordField.File;
    entryExitRecord: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                entryExitEntryDate: KintoneRecordField.Date;
                entryExitExitReason: KintoneRecordField.SingleLineText;
                entryExitDays: KintoneRecordField.Number;
                entryExitEntryReason: KintoneRecordField.DropDown;
                entryExitVisaType: KintoneRecordField.DropDown;
                entryExitExitDate: KintoneRecordField.Date;
            };
        }>;
    };
};
export type REST_SavedFamily = REST_Family & {
    $id: KintoneRecordField.Id;
    $revision: KintoneRecordField.Revision;
    Updated_by: KintoneRecordField.Modifier;
    Created_by: KintoneRecordField.Creator;
    Created_datetime: KintoneRecordField.CreatedTime;
    Record_number: KintoneRecordField.RecordNumber;
    Updated_datetime: KintoneRecordField.UpdatedTime;
};
