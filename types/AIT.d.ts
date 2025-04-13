export interface AIT {
    activePledges: kintone.fieldTypes.Number;
    Text_area: kintone.fieldTypes.MultiLineText;
    Name: kintone.fieldTypes.SingleLineText;
    townStatus: kintone.fieldTypes.RadioButton;
    ID: kintone.fieldTypes.SingleLineText;
}
export interface SavedAIT extends AIT {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    Updated_by: kintone.fieldTypes.Modifier;
    Created_by: kintone.fieldTypes.Creator;
    Updated_datetime: kintone.fieldTypes.UpdatedTime;
    Created_datetime: kintone.fieldTypes.CreatedTime;
    Record_number: kintone.fieldTypes.RecordNumber;
}
