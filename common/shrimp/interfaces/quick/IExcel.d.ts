export interface IExcel extends IExcelSheet {
    fileName: string;
}
export interface IExcelList {
    fileName: string;
    sheetList: Array<IExcelSheet>;
}
export interface IExcelSheet {
    items: Array<object>;
    headers: Array<object> | Array<IExcelHeader>;
    sheetName?: string;
}
export declare enum ExcelCellType {
    boolean = "b",
    number = "n",
    date = "d",
    text = "s"
}
export interface IExcelHeader {
    text: string;
    value: string;
    cellOptions?: IExcelCellOptions;
}
export interface IExcelCellOptions {
    type: ExcelCellType;
    numberFormat?: string;
}
export interface IExcelToJsonOptions {
    /** Output format */
    header?: "A" | number | string[];
    /** Override worksheet range */
    range?: any;
    /** Include or omit blank lines in the output */
    blankRows?: boolean;
    /** Default value for null/undefined values */
    defaultValue?: any;
    /** if true, return raw data; if false, return formatted text */
    raw?: boolean;
    /** if true, return raw numbers; if false, return formatted numbers */
    rawNumbers?: boolean;
    /** Use specified date format */
    dateFormat?: string | number;
}
export interface IExcelToJsonData {
    excelBuffer: ArrayBuffer;
    options?: IExcelToJsonOptions;
}
export interface IExcelJsonData {
    sheetName?: string;
    sheetData?: any[][] | any[];
}
//# sourceMappingURL=IExcel.d.ts.map