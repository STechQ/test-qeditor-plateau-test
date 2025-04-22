import { IExcel, IExcelList, IExcelSheet, IExcelJsonData, IExcelToJsonData } from '../../../../common/shrimp/interfaces/quick/IExcel';
export declare class ExportManager {
    sheetList: Array<IExcelSheet>;
    fileName: string;
    constructor(excelFile: IExcel | IExcelList | undefined);
    private setExcelList;
    private getItemValue;
    exportToXlsx(): void;
    private createXlsxSheet;
    private fitToColumn;
    xlsxToJson(excelToJsonData: IExcelToJsonData): IExcelJsonData[];
}
//# sourceMappingURL=ExportManager.d.ts.map