export interface AdoptionRecipients {
    activePledges: kintone.fieldTypes.Number;
    adoptionStatus: kintone.fieldTypes.RadioButton;
    endDate: kintone.fieldTypes.Date;
    year: kintone.fieldTypes.SingleLineText;
    ID_auto: kintone.fieldTypes.SingleLineText;
    fulfilledPledges: kintone.fieldTypes.Number;
    Name: kintone.fieldTypes.SingleLineText;
    Radio_button: kintone.fieldTypes.RadioButton;
    Radio_button_0: kintone.fieldTypes.RadioButton;
    Date_3: kintone.fieldTypes.Date;
    Date_4: kintone.fieldTypes.Date;
    pledgesRequired: kintone.fieldTypes.Number;
    ID: kintone.fieldTypes.SingleLineText;
    Radio_button_1: kintone.fieldTypes.RadioButton;
    Text_4: kintone.fieldTypes.SingleLineText;
    Text_5: kintone.fieldTypes.SingleLineText;
    Radio_button_2: kintone.fieldTypes.RadioButton;
    Text_0: kintone.fieldTypes.SingleLineText;
    Link_0: kintone.fieldTypes.Link;
    depArchive: kintone.fieldTypes.MultiLineText;
    dateOfBirth: kintone.fieldTypes.Date;
    Text: kintone.fieldTypes.SingleLineText;
    Text_area: kintone.fieldTypes.MultiLineText;
    NumberOfDependents: kintone.fieldTypes.Number;
    startDate: kintone.fieldTypes.Date;
    age: kintone.fieldTypes.Number;
    Link: kintone.fieldTypes.Link;
    pledgesNeeded: kintone.fieldTypes.Calc;
    Check_box_0: kintone.fieldTypes.CheckBox;

    Attachment: kintone.fieldTypes.File;
    Table: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                Date_2: kintone.fieldTypes.Date;
                Text_8: kintone.fieldTypes.SingleLineText;
                Text_9: kintone.fieldTypes.SingleLineText;
                Text_7: kintone.fieldTypes.SingleLineText;
            };
        }>;
    };
    history: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                history_end: kintone.fieldTypes.Date;
                history_start: kintone.fieldTypes.Date;
                history_active: kintone.fieldTypes.SingleLineText;
                history_fulfilled: kintone.fieldTypes.SingleLineText;
                history_year: kintone.fieldTypes.SingleLineText;
            };
        }>;
    };
    Dependents: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                childName: kintone.fieldTypes.SingleLineText;
                dependsBirth: kintone.fieldTypes.Date;
                dependsAge: kintone.fieldTypes.Number;
            };
        }>;
    };
}
export interface SavedAdoptionRecipients extends AdoptionRecipients {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Updated_by: kintone.fieldTypes.Modifier;
    Created_by: kintone.fieldTypes.Creator;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
}
import { KintoneRecordField } from '@kintone/rest-api-client';

export interface REST_AdoptionRecipients {
    activePledges: KintoneRecordField.Number;
    adoptionStatus: KintoneRecordField.RadioButton;
    endDate: KintoneRecordField.Date;
    year: KintoneRecordField.SingleLineText;
    ID_auto: KintoneRecordField.SingleLineText;
    fulfilledPledges: KintoneRecordField.Number;
    Name: KintoneRecordField.SingleLineText;
    Radio_button: KintoneRecordField.RadioButton;
    Radio_button_0: KintoneRecordField.RadioButton;
    Date_3: KintoneRecordField.Date;
    Date_4: KintoneRecordField.Date;
    pledgesRequired: KintoneRecordField.Number;
    ID: KintoneRecordField.SingleLineText;
    Radio_button_1: KintoneRecordField.RadioButton;
    Text_4: KintoneRecordField.SingleLineText;
    Text_5: KintoneRecordField.SingleLineText;
    Radio_button_2: KintoneRecordField.RadioButton;
    Text_0: KintoneRecordField.SingleLineText;
    Link_0: KintoneRecordField.Link;
    depArchive: KintoneRecordField.MultiLineText;
    dateOfBirth: KintoneRecordField.Date;
    Text: KintoneRecordField.SingleLineText;
    Text_area: KintoneRecordField.MultiLineText;
    NumberOfDependents: KintoneRecordField.Number;
    startDate: KintoneRecordField.Date;
    age: KintoneRecordField.Number;
    Link: KintoneRecordField.Link;
    pledgesNeeded: KintoneRecordField.Calc;
    Check_box_0: KintoneRecordField.CheckBox;

    Attachment: KintoneRecordField.File;
    Table: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                Date_2: KintoneRecordField.Date;
                Text_8: KintoneRecordField.SingleLineText;
                Text_9: KintoneRecordField.SingleLineText;
                Text_7: KintoneRecordField.SingleLineText;
            };
        }>;
    };
    history: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                history_end: KintoneRecordField.Date;
                history_start: KintoneRecordField.Date;
                history_active: KintoneRecordField.SingleLineText;
                history_fulfilled: KintoneRecordField.SingleLineText;
                history_year: KintoneRecordField.SingleLineText;
            };
        }>;
    };
    Dependents: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                childName: KintoneRecordField.SingleLineText;
                dependsBirth: KintoneRecordField.Date;
                dependsAge: KintoneRecordField.Number;
            };
        }>;
    };
}
export interface REST_SavedAdoptionRecipients extends AdoptionRecipients {
    $id: KintoneRecordField.Id;
    $revision: KintoneRecordField.Revision;
    Updated_by: KintoneRecordField.Modifier;
    Created_by: KintoneRecordField.Creator;
    Created_datetime: KintoneRecordField.CreatedTime;
    Record_number: KintoneRecordField.RecordNumber;
    Updated_datetime: KintoneRecordField.UpdatedTime;
}
