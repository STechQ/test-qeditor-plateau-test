import { IExcel, IExcelHeader } from '../../../../common/shrimp/interfaces/quick/IExcel';
export declare class ExportManager {
    fileName: string;
    items: Array<object>;
    headers: Array<object> | Array<IExcelHeader>;
    sheetName?: string;
    constructor(excelFile: IExcel);
    private getItemValue;
    exportToXlsx(): void;
    fitToColumn(items: Object): any;
}
//# sourceMappingURL=ExportManager.d.ts.map