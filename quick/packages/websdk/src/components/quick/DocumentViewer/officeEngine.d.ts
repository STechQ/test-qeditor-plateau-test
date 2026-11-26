import "./officeViewer.css";
import { OfficeKind, ViewerLocale } from "./officeSource";
/**
 * QDocumentViewer'in lazy yukledigi Office giris noktasi.
 * Ture gore sadece gereken kutuphane yuklenir: xlsx -> ExcelJS, docx -> docx-preview.
 */
export { toArrayBuffer, detectOfficeKind } from "./officeSource";
export type { OfficeKind, LegacyOfficeKind, ViewerLocale } from "./officeSource";
/** Tur ozelindeki yetenekler istege baglidir: tanimli degilse o turde yoktur. */
export interface OfficeView {
    destroy(): void;
    setZoom(zoom: number): void;
    /** metin/hucre secip kopyalama (selectableText) */
    setCopyEnabled(enabled: boolean): void;
    /** docx */
    pageCount?(): number;
    currentPage?(): number;
    goToPage?(page: number): boolean;
    print?(): void;
    /** xlsx */
    showSheet?(nameOrIndex: string | number): boolean;
}
export interface OfficeRenderOptions {
    locale: ViewerLocale;
    enableCopy: boolean;
    /** docx: sayfalar kaydirdikca eklenir (displayOnScroll) */
    lazyPages: boolean;
    /** docx: kaydirmayla gorunen sayfa degisince */
    onPageChange?: (page: number) => void;
}
export declare function renderOffice(kind: OfficeKind, container: HTMLElement, buffer: ArrayBuffer, options: OfficeRenderOptions): Promise<OfficeView>;
//# sourceMappingURL=officeEngine.d.ts.map