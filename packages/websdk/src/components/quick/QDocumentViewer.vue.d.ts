import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    show: boolean;
    loadedRatio: number;
    numPages: number;
    page: number;
    turn: number;
    showToolbar: boolean;
    zoomVal: number;
    rotateVal: number;
    loadedPages: number;
    docType: undefined;
    url: any;
    localLanguage: string;
    pageTitle: string;
    pdfKey: number;
    currentMinWidth: number;
}, {
    createPdf(): void;
    base64ToBlob(base64: any, type?: string): Blob;
    focusSelectedPage(): void;
    zoomIn(): void;
    zoomOut(): void;
    nextPage(): void;
    previousPage(): void;
    rotate(): void;
    goToPage(pageNumber: number): void;
    downloadPdf(): void;
    printPdf(): void;
    getType(): any;
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
}, unknown, {
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
}>;
export default _default;
//# sourceMappingURL=QDocumentViewer.vue.d.ts.map