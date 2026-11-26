import { ViewerLocale } from "./officeSource";
import { CellRange } from "./excelFormat";
/**
 * Excel (.xlsx/.xlsm) sayfa modeli: ExcelJS ile okunur, ExcelGridView ile cizilir.
 */
export interface CellBorders {
    t?: string | null;
    r?: string | null;
    b?: string | null;
    l?: string | null;
}
export interface CellModel {
    text: string;
    html?: string | null;
    formula?: string | null;
    link?: string | null;
    isNumber?: boolean;
    css?: string;
    font?: any;
    align?: string;
    valign?: string;
    wrap?: boolean;
    indent?: number;
    fill?: string | null;
    b: CellBorders;
    /** hucre ici onay kutusu: true/false degeri; onay kutusu degilse undefined */
    checkbox?: boolean;
    slave?: boolean;
    noRightGrid?: boolean;
    overflowWidth?: number;
}
export interface ImageModel {
    src: string;
    tl: {
        col: number;
        row: number;
        colOff: number;
        rowOff: number;
    };
    br: {
        col: number;
        row: number;
        colOff: number;
        rowOff: number;
    } | null;
    ext: {
        width: number;
        height: number;
    } | null;
}
export interface FilterRegion {
    /** baslik satiri dahil filtre araligi */
    range: CellRange;
    /** dosyada filtre kriteri olan sutunlar */
    fileFilteredCols: Set<number>;
    source: "sheet" | "table";
    name: string;
}
export interface SheetModel {
    name: string;
    hidden: boolean;
    tabColor: string | null;
    showGrid: boolean;
    frozen: {
        rows: number;
        cols: number;
    };
    rowCount: number;
    colCount: number;
    colWidths: number[];
    colHidden: boolean[];
    rowHeights: Array<number | undefined>;
    /** dosyada gizli kaydedilmis satirlar (filtreyle gizlenenler dahil) */
    rowHidden: boolean[];
    defRowPx: number;
    cells: Map<number, CellModel>;
    merges: CellRange[];
    mergedCells: Set<number>;
    images: ImageModel[];
    filters: FilterRegion[];
}
export interface WorkbookModel {
    format: "xlsx";
    sheets: SheetModel[];
    activeIndex: number;
}
export interface ModelOptions {
    locale: ViewerLocale;
    showImages: boolean;
    showHiddenSheets: boolean;
}
export declare const DEFAULT_COL_PX = 64;
export declare const KEY_COLS = 20000;
export declare const cellKey: (r: number, c: number) => number;
export declare function buildModelFromXlsx(buffer: ArrayBuffer, options: ModelOptions): Promise<WorkbookModel>;
export declare function revokeModel(model: WorkbookModel | null): void;
//# sourceMappingURL=excelModel.d.ts.map