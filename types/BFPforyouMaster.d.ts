export interface BFPforyouMaster {
    code: kintone.fieldTypes.Number;
    prefix: kintone.fieldTypes.SingleLineText;
    maxValue: kintone.fieldTypes.Number;
    program: kintone.fieldTypes.DropDown;
    used: kintone.fieldTypes.SingleLineText;
    appId: kintone.fieldTypes.Number;
    limit: kintone.fieldTypes.Number;
    expiry: kintone.fieldTypes.Date;
    desc: kintone.fieldTypes.SingleLineText;
    status: kintone.fieldTypes.RadioButton;

    elementary: kintone.fieldTypes.MultiSelect;
    highschool: kintone.fieldTypes.MultiSelect;
}
interface SavedBFPforyouMaster extends BFPforyouMaster {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Updated_by: kintone.fieldTypes.Modifier;
    Created_by: kintone.fieldTypes.Creator;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
}

import { KintoneRecordField } from '@kintone/rest-api-client';
export type REST_BFPforyouMaster = {
    code: KintoneRecordField.Number;
    prefix: KintoneRecordField.SingleLineText;
    maxValue: KintoneRecordField.Number;
    program: KintoneRecordField.DropDown;
    used: KintoneRecordField.SingleLineText;
    appId: KintoneRecordField.Number;
    limit: KintoneRecordField.Number;
    expiry: KintoneRecordField.Date;
    desc: KintoneRecordField.SingleLineText;
    status: KintoneRecordField.RadioButton;

    elementary: KintoneRecordField.MultiSelect;
    highschool: KintoneRecordField.MultiSelect;
};
