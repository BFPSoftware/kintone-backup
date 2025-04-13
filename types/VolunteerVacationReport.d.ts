export interface VolunteerVacationReport {
    workerType: kintone.fieldTypes.RadioButton;
    OCT: kintone.fieldTypes.Number;
    APR: kintone.fieldTypes.Number;
    MAY: kintone.fieldTypes.Number;
    AUG: kintone.fieldTypes.Number;
    leaveDays: kintone.fieldTypes.Number;
    staffName: kintone.fieldTypes.SingleLineText;
    vacation: kintone.fieldTypes.Number;
    KeyCode: kintone.fieldTypes.SingleLineText;
    ID?: kintone.fieldTypes.Number;
    JUL: kintone.fieldTypes.Number;
    FEB: kintone.fieldTypes.Number;
    JUN: kintone.fieldTypes.Number;
    deputationTaken: kintone.fieldTypes.Number;
    DEC: kintone.fieldTypes.Number;
    deputation: kintone.fieldTypes.Number;
    Personal_Status: kintone.fieldTypes.RadioButton;
    NOV: kintone.fieldTypes.Number;
    Year: kintone.fieldTypes.Number;
    JAN: kintone.fieldTypes.Number;
    sickDays: kintone.fieldTypes.Number;
    MAR: kintone.fieldTypes.Number;
    SEP: kintone.fieldTypes.Number;
    deputationLeft?: kintone.fieldTypes.Calc;
    vacationLeft?: kintone.fieldTypes.Calc;

    Group_selection: kintone.fieldTypes.GroupSelect;
    Department_selection: kintone.fieldTypes.OrganizationSelect;
}
export interface SavedVolunteerVacationReport extends VolunteerVacationReport {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Updated_by: kintone.fieldTypes.Modifier;
    Created_by: kintone.fieldTypes.Creator;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
}

import { KintoneRecordField } from '@kintone/rest-api-client';
export type REST_VolunteerVacationReport = {
    workerType: KintoneRecordField.RadioButton;
    OCT: KintoneRecordField.Number;
    APR: KintoneRecordField.Number;
    MAY: KintoneRecordField.Number;
    AUG: KintoneRecordField.Number;
    leaveDays: KintoneRecordField.Number;
    staffName: KintoneRecordField.SingleLineText;
    vacation: KintoneRecordField.Number;
    KeyCode: KintoneRecordField.SingleLineText;
    ID: KintoneRecordField.Number;
    JUL: KintoneRecordField.Number;
    FEB: KintoneRecordField.Number;
    JUN: KintoneRecordField.Number;
    deputationTaken: KintoneRecordField.Number;
    DEC: KintoneRecordField.Number;
    deputation: KintoneRecordField.Number;
    Personal_Status: KintoneRecordField.RadioButton;
    NOV: KintoneRecordField.Number;
    Year: KintoneRecordField.Number;
    JAN: KintoneRecordField.Number;
    sickDays: KintoneRecordField.Number;
    MAR: KintoneRecordField.Number;
    SEP: KintoneRecordField.Number;
    deputationLeft: KintoneRecordField.Calc;
    vacationLeft: KintoneRecordField.Calc;

    Group_selection: KintoneRecordField.GroupSelect;
    Department_selection: KintoneRecordField.OrganizationSelect;
};
export type REST_SavedVolunteerVacationReport = REST_VolunteerVacationReport & {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Updated_by: kintone.fieldTypes.Modifier;
    Created_by: kintone.fieldTypes.Creator;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
};
