export interface JobDescription {
    jobTitle: kintone.fieldTypes.SingleLineText;
    jobDescription: kintone.fieldTypes.MultiLineText;

    center: kintone.fieldTypes.OrganizationSelect;
}
export interface SavedJobDescription extends JobDescription {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Created_by: kintone.fieldTypes.Creator;
    Updated_by: kintone.fieldTypes.Modifier;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
}

import { KintoneRecordField } from '@kintone/rest-api-client';

export type REST_JobDescription = {
    jobTitle: KintoneRecordField.SingleLineText;
    jobDescription: KintoneRecordField.MultiLineText;
    center: KintoneRecordField.OrganizationSelect;
};
export type REST_SavedJobDescription = REST_JobDescription & {
    $id: KintoneRecordField.Id;
    $revision: KintoneRecordField.Revision;
    Updated_by: KintoneRecordField.Modifier;
    Created_by: KintoneRecordField.Creator;
    Created_datetime: KintoneRecordField.CreatedTime;
    Record_number: KintoneRecordField.RecordNumber;
};
