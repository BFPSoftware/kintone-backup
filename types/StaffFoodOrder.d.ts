export interface StaffFoodOrder {
    year: kintone.fieldTypes.Number;
    dueDate: kintone.fieldTypes.Date;
    center: kintone.fieldTypes.DropDown;
    submitDate: kintone.fieldTypes.Date;
    month: kintone.fieldTypes.DropDown;
    name: kintone.fieldTypes.SingleLineText;
    categories: kintone.fieldTypes.DropDown;
    key: kintone.fieldTypes.SingleLineText;
    budget: kintone.fieldTypes.Number;
    total: kintone.fieldTypes.Calc;
    items_table: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                amount: kintone.fieldTypes.Number;
                price: kintone.fieldTypes.Number;
                available: kintone.fieldTypes.RadioButton;
                id: kintone.fieldTypes.SingleLineText;
                itemNames: kintone.fieldTypes.SingleLineText;
                calculated: kintone.fieldTypes.Calc;
            };
        }>;
    };
    settings_table: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                budget_settings: kintone.fieldTypes.Number;
                center_settings: kintone.fieldTypes.DropDown;
                name_settings: kintone.fieldTypes.SingleLineText;

                volunteer_settings: kintone.fieldTypes.UserSelect;
            };
        }>;
    };
}
export interface SavedStaffFoodOrder extends StaffFoodOrder {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Updated_by: kintone.fieldTypes.Modifier;
    Created_by: kintone.fieldTypes.Creator;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
}

import { KintoneRecordField } from '@kintone/rest-api-client';

export type REST_StaffFoodOrder = {
    year: KintoneRecordField.Number;
    dueDate: KintoneRecordField.Date;
    center: KintoneRecordField.DropDown;
    submitDate: KintoneRecordField.Date;
    month: KintoneRecordField.DropDown;
    name: KintoneRecordField.SingleLineText;
    categories: KintoneRecordField.DropDown;
    key: KintoneRecordField.SingleLineText;
    budget: KintoneRecordField.Number;
    total: KintoneRecordField.Calc;
    items_table: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                amount: KintoneRecordField.Number;
                price: KintoneRecordField.Number;
                available: KintoneRecordField.RadioButton;
                id: KintoneRecordField.SingleLineText;
                itemNames: KintoneRecordField.SingleLineText;
                calculated: KintoneRecordField.Calc;
            };
        }>;
    };
    settings_table: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                budget_settings: KintoneRecordField.Number;
                center_settings: KintoneRecordField.DropDown;
                name_settings: KintoneRecordField.SingleLineText;

                volunteer_settings: KintoneRecordField.UserSelect;
            };
        }>;
    };
};
export type REST_SavedStaffFoodOrder = REST_StaffFoodOrder & {
    $id: KintoneRecordField.Id;
    $revision: KintoneRecordField.Revision;
    Updated_by: KintoneRecordField.Modifier;
    Created_by: KintoneRecordField.Creator;
    Updated_datetime: KintoneRecordField.UpdatedTime;
    Created_datetime: KintoneRecordField.CreatedTime;
    Record_number: KintoneRecordField.RecordNumber;
};
