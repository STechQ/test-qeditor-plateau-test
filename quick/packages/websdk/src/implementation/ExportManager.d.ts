import { BookType } from 'xlsx-color';
import { IExcel, IExcelList, IExcelSheet, IExcelJsonData, IExcelToJsonData } from '../../../../common/shrimp/interfaces/quick/IExcel';
export declare class ExportManager {
    sheetList: Array<IExcelSheet>;
    fileName: string;
    bookType: BookType;
    constructor(excelFile: IExcel | IExcelList | undefined);
    private setExcelList;
    private getItemValue;
    /**
     * Protects a cell value against formula injection for text based output.
     *
     * For xlsx nothing is escaped here: the value is written as a text cell instead
     * (see createXlsxSheet), which keeps the exported data intact.
     */
    private escapeFormula;
    exportToXlsx(): void;
    private createXlsxSheet;
    private fitToColumn;
    private base64ToAB;
    xlsxToJson(excelToJsonData: IExcelToJsonData): IExcelJsonData[];
}
//# sourceMappingURL=ExportManager.d.ts.map