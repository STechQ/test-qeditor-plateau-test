import { CssOrderManager } from "./cssOrderManager";
export declare class CssTagManager {
    private readonly styleClass;
    private backupTags?;
    private timer;
    constructor(styleClass: string);
    hideStyleTags(debounceTimer: number, shadowRoot: ShadowRoot): void;
    showStyleTags(debounceTimer: number, cssOrderManager: CssOrderManager): void;
    destroyStyleTagNames(shadowRoot: ShadowRoot): void;
}
//# sourceMappingURL=cssTagManager.d.ts.map