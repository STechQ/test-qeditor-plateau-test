export interface IDomCreateOptions {
    style?: {
        position?: string;
        zIndex?: string;
        top?: string;
        display?: string;
    };
    events?: {
        click?: (ev: MouseEvent) => any;
    };
    attrs?: {
        textContent: string;
        title: string;
    };
}
export declare class DomHelper {
    static create<K extends keyof HTMLElementTagNameMap>(elemTag: K, options: IDomCreateOptions): HTMLElementTagNameMap[K];
    static resize(element: HTMLDivElement, rect: DOMRect): void;
    static findParentBody(element: HTMLElement): HTMLElement | null;
}
//# sourceMappingURL=domHelper.d.ts.map