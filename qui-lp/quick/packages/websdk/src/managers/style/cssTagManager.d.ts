import { ShadowDOMManager } from "../ShadowDOMManager";
export declare class CssTagManager {
    private readonly styleClass;
    private backupTags?;
    private timer;
    private pageStateDictionary;
    constructor(styleClass: string);
    hideStyleTags(debounceTimer: number, pageName: string, shadowRoot: ShadowRoot | HTMLElement): void;
    showStyleTags(debounceTimer: number, pageName: string, shadowDOMManager: ShadowDOMManager): void;
    destroyStyleTagNames(shadowRoot: ShadowRoot | HTMLElement): void;
}
//# sourceMappingURL=cssTagManager.d.ts.map