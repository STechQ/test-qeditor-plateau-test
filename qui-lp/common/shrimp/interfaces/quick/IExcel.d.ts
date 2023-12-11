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
//# sourceMappingURL=IExcel.d.ts.map