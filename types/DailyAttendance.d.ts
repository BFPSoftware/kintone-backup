export interface DailyAttendance {
    date: kintone.fieldTypes.Date;
    lastName: kintone.fieldTypes.SingleLineText;
    Progress: kintone.fieldTypes.RadioButton;
    txt_day: kintone.fieldTypes.SingleLineText;
    firstName: kintone.fieldTypes.SingleLineText;
    ID: kintone.fieldTypes.Number;
    txt_memo: kintone.fieldTypes.MultiLineText;
    status: kintone.fieldTypes.DropDown;
}
export interface SavedDailyAttendance extends DailyAttendance {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    申請者: kintone.fieldTypes.Creator;
    更新者: kintone.fieldTypes.Modifier;
    レコード番号: kintone.fieldTypes.RecordNumber;
    申請日時: kintone.fieldTypes.CreatedTime;
    更新日時: kintone.fieldTypes.UpdatedTime;
}

import { KintoneRecordField } from '@kintone/rest-api-client';

export type REST_DailyAttendance = {
    date: KintoneRecordField.Date;
    lastName: KintoneRecordField.SingleLineText;
    Progress: KintoneRecordField.RadioButton;
    txt_day: KintoneRecordField.SingleLineText;
    firstName: KintoneRecordField.SingleLineText;
    ID: KintoneRecordField.Number;
    txt_memo: KintoneRecordField.MultiLineText;
    status: KintoneRecordField.DropDown;
};
export type REST_SavedDailyAttendance = REST_DailyAttendance & {
    $id: KintoneRecordField.Id;
    $revision: KintoneRecordField.Revision;
    申請者: KintoneRecordField.Creator;
    更新者: KintoneRecordField.Modifier;
    レコード番号: KintoneRecordField.RecordNumber;
    申請日時: KintoneRecordField.CreatedTime;
    更新日時: KintoneRecordField.UpdatedTime;
};
