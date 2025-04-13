export interface LeaveRequest {
    vacationTaken: kintone.fieldTypes.Number;
    LimitDate: kintone.fieldTypes.Number;
    title: kintone.fieldTypes.SingleLineText;
    WorkerType: kintone.fieldTypes.RadioButton;
    OfDays: kintone.fieldTypes.Number;
    deputationTaken: kintone.fieldTypes.Number;
    requestType: kintone.fieldTypes.DropDown;
    deputation: kintone.fieldTypes.Number;
    Date_from: kintone.fieldTypes.Date;
    Date: kintone.fieldTypes.Date;
    Date_to: kintone.fieldTypes.Date;
    deputationLeft: kintone.fieldTypes.Number;
    vacationLeft: kintone.fieldTypes.Number;
    Text_area_0: kintone.fieldTypes.MultiLineText;

    Manager: kintone.fieldTypes.UserSelect;
    Director_test: kintone.fieldTypes.GroupSelect;
    creator: kintone.fieldTypes.UserSelect;
    Director: kintone.fieldTypes.UserSelect;
    center: kintone.fieldTypes.OrganizationSelect;
    Manager_test: kintone.fieldTypes.GroupSelect;
    Attachment: kintone.fieldTypes.File;
    reportForm: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                deputationMeeting: kintone.fieldTypes.Date;
                Text: kintone.fieldTypes.SingleLineText;
                Text_area_1: kintone.fieldTypes.MultiLineText;
                Text_area: kintone.fieldTypes.MultiLineText;
            };
        }>;
    };
}
export interface SavedLeaveRequest extends LeaveRequest {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Updated_by: kintone.fieldTypes.Modifier;
    Created_by: kintone.fieldTypes.Creator;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
}

import { KintoneRecordField } from '@kintone/rest-api-client';

export type REST_LeaveRequest = {
    vacationTaken: KintoneRecordField.Number;
    LimitDate: KintoneRecordField.Number;
    title: KintoneRecordField.SingleLineText;
    WorkerType: KintoneRecordField.RadioButton;
    OfDays: KintoneRecordField.Number;
    deputationTaken: KintoneRecordField.Number;
    requestType: KintoneRecordField.DropDown;
    deputation: KintoneRecordField.Number;
    Date_from: KintoneRecordField.Date;
    Date: KintoneRecordField.Date;
    Date_to: KintoneRecordField.Date;
    deputationLeft: KintoneRecordField.Number;
    vacationLeft: KintoneRecordField.Number;
    Text_area_0: KintoneRecordField.MultiLineText;

    Manager: KintoneRecordField.UserSelect;
    Director_test: KintoneRecordField.GroupSelect;
    creator: KintoneRecordField.UserSelect;
    Director: KintoneRecordField.UserSelect;
    center: KintoneRecordField.OrganizationSelect;
    Manager_test: KintoneRecordField.GroupSelect;
    Attachment: KintoneRecordField.File;
    reportForm: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                deputationMeeting: KintoneRecordField.Date;
                Text: KintoneRecordField.SingleLineText;
                Text_area_1: KintoneRecordField.MultiLineText;
                Text_area: KintoneRecordField.MultiLineText;
            };
        }>;
    };
    Status: KintoneRecordField.Status;
};
export type REST_SavedLeaveRequest = REST_LeaveRequest & {
    $id: KintoneRecordField.Id;
    $revision: KintoneRecordField.Revision;
    Updated_by: KintoneRecordField.Modifier;
    Created_by: KintoneRecordField.Creator;
    Created_datetime: KintoneRecordField.CreatedTime;
    Record_number: KintoneRecordField.RecordNumber;
    Updated_datetime: KintoneRecordField.UpdatedTime;
};
