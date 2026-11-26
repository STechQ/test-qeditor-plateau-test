import Vue from "vue";
interface OfficeHint {
    input: any;
    strong: boolean;
    name?: string;
}
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    show: boolean;
    loadedRatio: number;
    numPages: number;
    page: number;
    turn: number;
    showToolbar: boolean;
    tiffLoading: boolean;
    zoomVal: number;
    rotateVal: number;
    loadedPages: number;
    docType: undefined;
    url: any;
    normalizedSrc: any;
    renderPdfUrl: string;
    pdfLoadToken: number;
    localLanguage: string;
    pageTitle: string;
    pdfKey: number;
    currentMinWidth: number;
    dataType: "base64" | "arrayBuffer" | "url";
    tiffBufferData: ArrayBuffer | null;
    tifIfds: any[];
    blocked: boolean;
    internalErrorMessage: string;
    scrollEndTriggered: boolean;
    lastScrollTop: number;
    scrolledToBottomListener: ((e: MessageEvent) => void) | null;
    binaryToken: number;
    officeState: "" | "loading" | "ready";
    officeKind: "" | "docx" | "xlsx";
    officeZoom: number;
    officePage: number;
    officePageCount: number;
    officeMessage: string;
    officeToken: number;
    officeScrollEndTriggered: boolean;
}, {
    fetchPdfBytes(src: string): Promise<ArrayBuffer>;
    scanForJS(content: ArrayBuffer | string, type: 'pdf' | 'html'): boolean;
    isTiffBuffer(buffer: ArrayBuffer): boolean;
    loadTiff(dataType: "base64" | "arrayBuffer" | "url"): Promise<void>;
    getTiffBuffer(type: string, src: any): Promise<ArrayBuffer>;
    escapeHTML(str: string): string;
    renderTiffPage(): void;
    base64ToArrayBuffer(base64: string): ArrayBuffer;
    createPdf(): Promise<void>;
    downloadTiff(): void;
    base64ToAB(base64: string): ArrayBufferLike;
    base64ToBlob(base64: string, type?: string): Blob;
    focusSelectedPage(): void;
    zoomIn(): void;
    zoomOut(): void;
    nextPage(): false | void;
    previousPage(): false | void;
    rotate(): void;
    goToPage(pageNumber: number): false | void;
    downloadPdf(): void;
    printPdf(): void;
    getSrcWithMimeType(): any;
    getType(): any;
    isBinarySrc(src: any): boolean;
    bytesToBase64(bytes: Uint8Array): string;
    convertBinarySrc(token: number): Promise<void>;
    /**
     * Kaynak docx/xlsx adayi mi? strong: uzanti/mime acikca Office diyor.
     * Office cikmazsa (zayif aday: zip mime, PK/OLE imzali buffer; ya da bozuk dosya) desteklenmeyen dosya gosterilir.
     */
    getOfficeHint(): OfficeHint | null;
    dataUrlOfficeHint(val: any): OfficeHint | null;
    officeLocale(): "tr" | "en";
    loadOffice(hint: OfficeHint): Promise<void>;
    /** Office dosyasini oldugu gibi indirir (docx/xlsx toolbar'i ve doc/xls yonlendirmesi) */
    officeDownload(): void;
    /** src file input'tan gelen bir dosyaysa (File ya da File[]) adi; degilse bos */
    inputFileName(): string;
    saveBlob(blob: Blob, name: string): void;
    /** Gosterilemeyen dosyayi src'deki haliyle indirir; icerik degistirilmez */
    downloadOriginal(): Promise<void>;
    officeZoomIn(): void;
    officeZoomOut(): void;
    /** toolbar'daki yuzde kutusu: gecersiz deger mevcut zoom'a geri doner */
    officeZoomInput(e: Event): void;
    setOfficeZoom(zoom: number): void;
    /** docx: sayfaya git (toolbar'daki sayfa kutusu) */
    officeGoToPage(value: string | number): void;
    /** docx: yazdir */
    officePrint(): void;
    /** xlsx: ada veya sira numarasina (0'dan) gore sayfa (sheet) acar; xlsx gosterilmiyorsa false */
    showSheet(nameOrIndex: string | number): boolean;
    officeScroll(e: Event): void;
    disposeOffice(cancel?: boolean): void;
    onFrameScrollBottom(): void;
    handleScroll({ target: { scrollTop, clientHeight, scrollHeight, lastChild: { offsetHeight }, }, }: {
        target: {
            scrollTop: any;
            clientHeight: any;
            scrollHeight: any;
            lastChild: {
                offsetHeight: any;
            };
        };
    }): void;
}, {
    officeScale: number;
    officeToolbarVisible: boolean;
    officeZoomMinPercent: number;
    officeZoomMaxPercent: number;
    unsupportedText: string;
}, {
    src: any;
    height: string;
    width: string;
    scale: string;
    showToolBar: boolean;
    pdfToolbarBackgroundColor: string;
    pdfBackgroundColor: string;
    hidePagination: boolean;
    hideDescription: boolean;
    hideDownload: boolean;
    hideRotate: boolean;
    hideZoom: boolean;
    loadingContent: string;
    displayOnScroll: boolean;
    fileDescription: string;
    showPrint: boolean;
    _renderingProps: any;
    enableSecurityScan: boolean;
    securityErrorMessage: string;
    securityErrorMessageIcon: string;
    selectableText: boolean;
    unsupportedMessage: string;
}>;
export default _default;
//# sourceMappingURL=QDocumentViewer.vue.d.ts.map