export interface NetanyaReservation {
    comments: kintone.fieldTypes.MultiLineText;
    checkIn: kintone.fieldTypes.DateTime;
    nights: kintone.fieldTypes.Number;
    name: kintone.fieldTypes.SingleLineText;
    stayingWith: kintone.fieldTypes.SingleLineText;
    checkOut: kintone.fieldTypes.DateTime;
    email: kintone.fieldTypes.SingleLineText;

    creator: kintone.fieldTypes.UserSelect;
}
export interface SavedNetanyaReservation extends NetanyaReservation {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Updated_by: kintone.fieldTypes.Modifier;
    Created_by: kintone.fieldTypes.Creator;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
}

import { KintoneRecordField } from '@kintone/rest-api-client';

export type REST_NetanyaReservation = {
    comments: KintoneRecordField.MultiLineText;
    checkIn: KintoneRecordField.DateTime;
    nights: KintoneRecordField.Number;
    name: KintoneRecordField.SingleLineText;
    stayingWith: KintoneRecordField.SingleLineText;
    checkOut: KintoneRecordField.DateTime;
    email: KintoneRecordField.SingleLineText;

    creator: KintoneRecordField.UserSelect;
};

export type REST_SavedNetanyaReservation = REST_NetanyaReservation & {
    $id: KintoneRecordField.Id;
    $revision: KintoneRecordField.Revision;
    Updated_by: KintoneRecordField.Modifier;
    Created_by: KintoneRecordField.Creator;
    Created_datetime: KintoneRecordField.CreatedTime;
    Record_number: KintoneRecordField.RecordNumber;
};
