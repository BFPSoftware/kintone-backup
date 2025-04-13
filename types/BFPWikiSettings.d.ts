declare namespace kintone.types {
    interface BFPWikiSettings {
        sdd: {
            type: 'SUBTABLE';
            value: Array<{
                id: string;
                value: {
                    sdd_level1: kintone.fieldTypes.SingleLineText;
                    sdd_level2: kintone.fieldTypes.SingleLineText;
                    sdd_level3: kintone.fieldTypes.SingleLineText;
                };
            }>;
        };
        it: {
            type: 'SUBTABLE';
            value: Array<{
                id: string;
                value: {
                    it_level3: kintone.fieldTypes.SingleLineText;
                    it_level2: kintone.fieldTypes.SingleLineText;
                    it_level1: kintone.fieldTypes.SingleLineText;
                };
            }>;
        };
    }
    interface SavedBFPWikiSettings extends BFPWikiSettings {
        $id: kintone.fieldTypes.Id;
        $revision: kintone.fieldTypes.Revision;
        Created_by: kintone.fieldTypes.Creator;
        Updated_by: kintone.fieldTypes.Modifier;
        Updated_datetime: kintone.fieldTypes.UpdatedTime;
        Created_datetime: kintone.fieldTypes.CreatedTime;
        Record_number: kintone.fieldTypes.RecordNumber;
    }
}

import { KintoneRecordField } from '@kintone/rest-api-client';
export type REST_BFPWikiSettings = {
    sdd: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                sdd_level1: KintoneRecordField.SingleLineText;
                sdd_level2: KintoneRecordField.SingleLineText;
                sdd_level3: KintoneRecordField.SingleLineText;
            };
        }>;
    };
    it: {
        type: 'SUBTABLE';
        value: Array<{
            id: string;
            value: {
                it_level3: KintoneRecordField.SingleLineText;
                it_level2: KintoneRecordField.SingleLineText;
                it_level1: KintoneRecordField.SingleLineText;
            };
        }>;
    };
};
