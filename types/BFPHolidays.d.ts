export interface BFPHolidays {
    event: kintone.fieldTypes.SingleLineText;
    Date: kintone.fieldTypes.Date;
}
export interface SavedBFPHolidays extends BFPHolidays {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Created_by: kintone.fieldTypes.Creator;
    Updated_by: kintone.fieldTypes.Modifier;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
}

import { KintoneRecordField } from '@kintone/rest-api-client';

export type REST_BFPHolidays = {
    event: KintoneRecordField.SingleLineText;
    Date: kintone.fieldTypes.Date;
};

export type REST_SavedBFPHolidays = REST_BFPHolidays & {
    $id: KintoneRecordField.Id;
    $revision: KintoneRecordField.Revision;
    Created_by: KintoneRecordField.Creator;
    Updated_by: KintoneRecordField.Modifier;
    Updated_datetime: KintoneRecordField.UpdatedTime;
    Created_datetime: KintoneRecordField.CreatedTime;
    Record_number: KintoneRecordField.RecordNumber;
};
