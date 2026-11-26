/** docx-preview ile Word (.docx) gosterimi. Cikti HTML oldugu icin metin dogal olarak secilip kopyalanabilir. */
export interface WordDocOptions {
    breakPages: boolean;
    useWordPageBreaks: boolean;
    renderHeaders: boolean;
    renderFooters: boolean;
    renderFootnotes: boolean;
    renderEndnotes: boolean;
    renderComments: boolean;
    renderChanges: boolean;
    ignoreWidth: boolean;
    ignoreHeight: boolean;
    ignoreFonts: boolean;
    enableTabStops: boolean;
    enableCopy: boolean;
    /** sayfalar baslangicta ekrani dolduracak kadar eklenir, kalanlar kaydirdikca eklenir */
    lazyPages: boolean;
    onCopied?: (e: {
        text: string;
    }) => void;
    /** kaydirmayla gorunen sayfa degisince (1 tabanli) */
    onPageChange?: (page: number) => void;
}
export declare class WordDocView {
    private options;
    private root;
    private styleHost;
    private body;
    private onCopy;
    private onScroll;
    private lastPage;
    /** lazyPages: henuz eklenmemis sayfalar (sirayla) */
    private pending;
    constructor(container: HTMLElement, options: WordDocOptions);
    render(buffer: ArrayBuffer): Promise<{
        pageCount: number;
    }>;
    /** lazyPages: son eklenen sayfa ekranin altina yaklastikca siradaki sayfalari ekler */
    private fillPages;
    setCopyEnabled(enabled: boolean): void;
    getText(): string;
    private pages;
    pageCount(): number;
    /**
     * Belgenin ekranda gorunen kisminin ust %40'ina giren son sayfa (ekran koordinatlariyla; zoom'dan ve
     * hangi kapsayicinin kaydigindan bagimsiz).
     */
    currentPage(): number;
    /**
     * Belge kendi icinde kayiyorsa yalnizca onu kaydirir: sayfa toolbar'in altina gelir, ust sayfa (ve toolbar) yerinde kalir.
     * Kendi icinde kaymiyorsa hangi kapsayici kayiyorsa onu kaydirir (scrollIntoView).
     */
    scrollToPage(page: number): boolean;
    setZoom(zoom: number): void;
    /** Belgeyi kendi stilleriyle gizli bir iframe'de yazdirir (icerik render sonrasi temizlenmis HTML'dir) */
    print(): void;
    destroy(): void;
}
//# sourceMappingURL=WordDocView.d.ts.map