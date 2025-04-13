export interface SDDReports {
    year: kintone.fieldTypes.SingleLineText;
    reportType: kintone.fieldTypes.DropDown;
    month: kintone.fieldTypes.DropDown;
    byCountryTable: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                byCountryEndOfMonth: kintone.fieldTypes.Number;
                byCountryFirstOfMonth: kintone.fieldTypes.Number;
                byCountryLeft: kintone.fieldTypes.Number;
                byCountryNew: kintone.fieldTypes.Number;
                byCountryOriginCountry: kintone.fieldTypes.SingleLineText;
                byCountryNotes: kintone.fieldTypes.SingleLineText;
            };
        }>;
    };
    byTypeTable: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                byTypeEndMonthPercentage: kintone.fieldTypes.Number;
                byTypeFirstMonthPercentage: kintone.fieldTypes.Number;
                byTypeEndOfMonth: kintone.fieldTypes.Number;
                byTypeNotes: kintone.fieldTypes.SingleLineText;
                type: kintone.fieldTypes.SingleLineText;
                byTypeFirstOfMonth: kintone.fieldTypes.Number;
            };
        }>;
    };
    volunteersTable: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                volunteersCountry: kintone.fieldTypes.SingleLineText;
                volunteersCategory: kintone.fieldTypes.SingleLineText;
                volunteersOthers: kintone.fieldTypes.SingleLineText;

                volunteersVolunteer: kintone.fieldTypes.UserSelect;
            };
        }>;
    };
}
interface SavedSDDReports extends SDDReports {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Updated_by: kintone.fieldTypes.Modifier;
    Created_by: kintone.fieldTypes.Creator;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
}

import { KintoneRecordField } from '@kintone/rest-api-client';

export type REST_SDDReports = {
    year: KintoneRecordField.SingleLineText;
    reportType: KintoneRecordField.DropDown;
    month: KintoneRecordField.DropDown;
    byCountryTable: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                byCountryEndOfMonth: KintoneRecordField.Number;
                byCountryFirstOfMonth: KintoneRecordField.Number;
                byCountryLeft: KintoneRecordField.Number;
                byCountryNew: KintoneRecordField.Number;
                byCountryOriginCountry: KintoneRecordField.SingleLineText;
                byCountryNotes: KintoneRecordField.SingleLineText;
            };
        }>;
    };
    byTypeTable: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                byTypeEndMonthPercentage: KintoneRecordField.Number;
                byTypeFirstMonthPercentage: KintoneRecordField.Number;
                byTypeEndOfMonth: KintoneRecordField.Number;
                byTypeNotes: KintoneRecordField.SingleLineText;
                type: KintoneRecordField.SingleLineText;
                byTypeFirstOfMonth: KintoneRecordField.Number;
            };
        }>;
    };
    volunteersTable: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                volunteersCountry: KintoneRecordField.SingleLineText;
                volunteersCategory: KintoneRecordField.SingleLineText;
                volunteersOthers: KintoneRecordField.SingleLineText;

                volunteersVolunteer: KintoneRecordField.UserSelect;
            };
        }>;
    };
};
