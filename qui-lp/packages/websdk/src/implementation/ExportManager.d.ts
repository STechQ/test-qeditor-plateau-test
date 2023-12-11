import { IExcel, IExcelList, IExcelSheet } from '../../../../common/shrimp/interfaces/quick/IExcel';
export declare class ExportManager {
    sheetList: Array<IExcelSheet>;
    fileName: string;
    constructor(excelFile: IExcel | IExcelList);
    private setExcelList;
    private getItemValue;
    exportToXlsx(): void;
    private createXlsxSheet;
    private fitToColumn;
}
//# sourceMappingURL=ExportManager.d.ts.map