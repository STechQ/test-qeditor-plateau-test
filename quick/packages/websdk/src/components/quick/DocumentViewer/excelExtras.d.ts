import { CellRange } from "./excelFormat";
/**
 * ExcelJS'in okumadigi / ic yapisina bagli kalmak istemedigimiz bilgiler dogrudan dosya XML'inden okunur:
 *  - Hucre ici onay kutusu (Excel 365 "Ekle > Onay Kutusu"): styles.xml cellXfs > extLst > xfpb:xfComplement i="N"
 *    -> featurePropertyBag.xml: XFComplements[MappedFeaturePropertyBags][N] -> XFComplement -> XFControls -> CellControl -> bag type="Checkbox"
 *  - Sayfa filtresi (autoFilter) ve Excel tablolarinin filtre araliklari (xl/tables/tableN.xml)
 */
export interface FilterInfo {
    range: CellRange;
    /** dosyada kriter tanimli (filterColumn) mutlak sutun numaralari */
    filteredCols: Set<number>;
}
export interface TableInfo {
    name: string;
    range: CellRange;
    filter: FilterInfo | null;
}
export interface SheetExtras {
    checkboxes: Set<string>;
    autoFilter: FilterInfo | null;
    tables: TableInfo[];
}
export declare function readExcelExtras(buffer: ArrayBuffer): Promise<Map<string, SheetExtras>>;
//# sourceMappingURL=excelExtras.d.ts.map