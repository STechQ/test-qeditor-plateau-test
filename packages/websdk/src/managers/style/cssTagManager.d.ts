export declare class CssTagManager {
    private readonly styleClass;
    private backupTags?;
    private timer;
    private pageStateDictionary;
    constructor(styleClass: string);
    hideStyleTags(debounceTimer: number, pageName: string): void;
    showStyleTags(debounceTimer: number, pageName: string): void;
    destroyStyleTagNames(): void;
}
//# sourceMappingURL=cssTagManager.d.ts.map