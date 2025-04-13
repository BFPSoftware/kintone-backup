export interface HomeRepairRequest {
    Drop_down_1: kintone.fieldTypes.DropDown;
    Drop_down_0: kintone.fieldTypes.DropDown;
    Text_6: kintone.fieldTypes.SingleLineText;
    Text_4: kintone.fieldTypes.SingleLineText;
    Drop_down: kintone.fieldTypes.DropDown;
    Text_5: kintone.fieldTypes.SingleLineText;
    Text_2: kintone.fieldTypes.SingleLineText;
    Text_3: kintone.fieldTypes.SingleLineText;
    Text_0: kintone.fieldTypes.SingleLineText;
    Text_1: kintone.fieldTypes.SingleLineText;
    requestType: kintone.fieldTypes.DropDown;
    Text_10: kintone.fieldTypes.SingleLineText;
    Text_area: kintone.fieldTypes.MultiLineText;
    Date: kintone.fieldTypes.Date;
    Text_area_0: kintone.fieldTypes.MultiLineText;
    Text_area_1: kintone.fieldTypes.MultiLineText;
    Text_area_2: kintone.fieldTypes.MultiLineText;
}
export interface SavedHomeRepairRequest extends HomeRepairRequest {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Updated_by: kintone.fieldTypes.Modifier;
    Created_by: kintone.fieldTypes.Creator;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
}

import { KintoneRecordField } from '@kintone/rest-api-client';

export type REST_HomeRepairRequest = {
    Drop_down_1: KintoneRecordField.DropDown;
    Drop_down_0: KintoneRecordField.DropDown;
    Text_6: KintoneRecordField.SingleLineText;
    Text_4: KintoneRecordField.SingleLineText;
    Drop_down: KintoneRecordField.DropDown;
    Text_5: KintoneRecordField.SingleLineText;
    Text_2: KintoneRecordField.SingleLineText;
    Text_3: KintoneRecordField.SingleLineText;
    Text_0: KintoneRecordField.SingleLineText;
    Text_1: KintoneRecordField.SingleLineText;
    requestType: KintoneRecordField.DropDown;
    Text_10: KintoneRecordField.SingleLineText;
    Text_area: KintoneRecordField.MultiLineText;
    Date: KintoneRecordField.Date;
    Text_area_0: KintoneRecordField.MultiLineText;
    Text_area_1: KintoneRecordField.MultiLineText;
    Text_area_2: KintoneRecordField.MultiLineText;
};
export type REST_SavedHomeRepairRequest = HomeRepairRequest & {
    $id: KintoneRecordField.Id;
    $revision: KintoneRecordField.Revision;
    Updated_by: KintoneRecordField.Modifier;
    Created_by: KintoneRecordField.Creator;
    Created_datetime: KintoneRecordField.CreatedTime;
    Record_number: KintoneRecordField.RecordNumber;
    Updated_datetime: KintoneRecordField.UpdatedTime;
};
