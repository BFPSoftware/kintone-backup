export interface BFPWiki {
    title: kintone.fieldTypes.SingleLineText;
    content: kintone.fieldTypes.RichText;
    department: kintone.fieldTypes.DropDown;
    subCategory3: kintone.fieldTypes.SingleLineText;
    subCategory2: kintone.fieldTypes.SingleLineText;
    subCategory1: kintone.fieldTypes.SingleLineText;
    googleLink: kintone.fieldTypes.SingleLineText;
    category: kintone.fieldTypes.SingleLineText;

    tagSDD: kintone.fieldTypes.MultiSelect;
    tagGeneral: kintone.fieldTypes.MultiSelect;
    tagIT: kintone.fieldTypes.MultiSelect;
    tagAdoption: kintone.fieldTypes.MultiSelect;
    viewPermission: kintone.fieldTypes.GroupSelect;
    editPermission: kintone.fieldTypes.GroupSelect;
    pdf: kintone.fieldTypes.File;
    attachmentTable: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                attachment_description: kintone.fieldTypes.SingleLineText;

                attachment: kintone.fieldTypes.File;
            };
        }>;
    };
}
export interface SavedBFPWiki extends BFPWiki {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Updated_by: kintone.fieldTypes.Modifier;
    Created_by: kintone.fieldTypes.Creator;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
}

import { KintoneRecordField } from '@kintone/rest-api-client';
export type REST_BFPWiki = {
    title: KintoneRecordField.SingleLineText;
    content: KintoneRecordField.RichText;
    department: KintoneRecordField.DropDown;
    subCategory3: KintoneRecordField.SingleLineText;
    subCategory2: KintoneRecordField.SingleLineText;
    subCategory1: KintoneRecordField.SingleLineText;
    googleLink: KintoneRecordField.SingleLineText;
    category: KintoneRecordField.SingleLineText;

    tagSDD: KintoneRecordField.MultiSelect;
    tagGeneral: KintoneRecordField.MultiSelect;
    tagIT: KintoneRecordField.MultiSelect;
    tagAdoption: KintoneRecordField.MultiSelect;
    viewPermission: KintoneRecordField.GroupSelect;
    editPermission: KintoneRecordField.GroupSelect;
    pdf: KintoneRecordField.File;
    attachmentTable: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                attachment_description: KintoneRecordField.SingleLineText;

                attachment: KintoneRecordField.File;
            };
        }>;
    };
};
export type REST_SavedBFPWiki = REST_BFPWiki & {
    $id: KintoneRecordField.Id;
    $revision: KintoneRecordField.Revision;
    Updated_by: KintoneRecordField.Modifier;
    Created_by: KintoneRecordField.Creator;
    Created_datetime: KintoneRecordField.CreatedTime;
    Record_number: KintoneRecordField.RecordNumber;
    Updated_datetime: KintoneRecordField.UpdatedTime;
};
