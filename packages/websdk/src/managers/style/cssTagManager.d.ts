import { CssOrderManager } from "./cssOrderManager";
export declare class CssTagManager {
    private readonly styleClass;
    private backupTags?;
    private timer;
    private pageStateDictionary;
    constructor(styleClass: string);
    hideStyleTags(debounceTimer: number, shadowRoot: ShadowRoot, pageName: string): void;
    showStyleTags(debounceTimer: number, pageName: string, cssOrderManager: CssOrderManager): void;
    destroyStyleTagNames(shadowRoot: ShadowRoot): void;
}
//# sourceMappingURL=cssTagManager.d.ts.map