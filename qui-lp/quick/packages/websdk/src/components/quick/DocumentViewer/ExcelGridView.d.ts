import { ViewerLocale } from "./officeSource";
import { WorkbookModel } from "./excelModel";
/**
 * Excel gorunumlu salt okunur grid. Kullanici sadece secip kopyalayabilir; filtre acikken satirlari
 * ekranda filtreleyebilir (dosya degismez).
 */
export interface ExcelGridOptions {
    locale: ViewerLocale;
    showFormulaBar: boolean;
    showSheetTabs: boolean;
    showHeaders: boolean;
    gridLines: "file" | "show" | "hide";
    enableFilter: boolean;
    renderCheckboxes: boolean;
    enableCopy: boolean;
    onSheetChanged?: (e: {
        index: number;
        name: string;
    }) => void;
    onSelectionChanged?: (e: {
        address: string;
        value: string;
        formula: string | null;
    }) => void;
    onCopied?: (e: {
        address: string;
        rowCount: number;
        colCount: number;
    }) => void;
    onFilterChanged?: (e: {
        sheet: string;
        filteredColumns: string[];
        visibleRowCount: number;
    }) => void;
}
export declare class ExcelGridView {
    private model;
    private options;
    private root;
    private scroll;
    private canvas;
    private nameBox;
    private fxVal;
    private tabs;
    private tbody;
    private selBox;
    private popup;
    /** sag tik menusunde "Kopyala" cikmasi icin imlecin altina konan, secimin metnini tutan gizli alan */
    private clip;
    private active;
    private sheet;
    private sel;
    private drag;
    private renderedRows;
    private rowHeadW;
    private headH;
    private visibleCols;
    private colLeft;
    private rowTop;
    private lastRow;
    private lastRowBottom;
    private mergeAt;
    private coveredBy;
    private hiddenRows;
    private filterStates;
    private listeners;
    constructor(container: HTMLElement, model: WorkbookModel, options: ExcelGridOptions, initialSheet?: string | number);
    getSheetNames(): string[];
    getActiveSheet(): {
        index: number;
        name: string;
    };
    showSheet(nameOrIndex: string | number): boolean;
    setCopyEnabled(enabled: boolean): void;
    /** CSS zoom: secim kutusu, resimler ve sabit satirlar grid ile birlikte olceklenir */
    setZoom(zoom: number): void;
    clearFilters(): void;
    getSelection(): {
        address: string;
        values: string[][];
    } | null;
    copySelection(): Promise<boolean>;
    destroy(): void;
    private indexOf;
    private on;
    private get showGrid();
    private isRowHidden;
    private renderTabs;
    private cellText;
    private computeHiddenRows;
    private applyFilters;
    private isColFiltered;
    private materializeBase;
    private openFilter;
    private closePopup;
    private renderSheet;
    private edge;
    private filterHeaderAt;
    private renderMoreRows;
    private layout;
    private xAt;
    private yAt;
    private expandForMerges;
    private select;
    private selAddress;
    private activeCell;
    private updateFormulaBar;
    private emitSelection;
    private emitCopied;
    private cellFromEvent;
    private selectionMatrix;
    private selectionData;
    private showClip;
    private hideClip;
    private bind;
}
//# sourceMappingURL=ExcelGridView.d.ts.map