declare global {
    interface Document {
        getPlateauShadowRoot: () => ShadowRoot | undefined;
    }
}
export declare class CssHelper {
    static IncludeCSS(cssPath: string, options: {
        type: "after";
        prevSibling: HTMLElement;
    } | {
        type: "document";
    }): HTMLLinkElement;
    static IncludeCSSString(css: string, cssFileName: string, options: {
        type: "after";
        prevSibling: HTMLElement;
    } | {
        type: "document";
        contentDocument?: Document;
    }): HTMLStyleElement;
    static deleteCSS(id: string, contentDocument?: Document): void;
}
//# sourceMappingURL=cssHelper.d.ts.map