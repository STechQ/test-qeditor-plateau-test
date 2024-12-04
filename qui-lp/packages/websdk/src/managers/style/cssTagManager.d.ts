export declare class CssTagManager {
    private readonly styleClass;
    private backupTags?;
    private timer;
    constructor(styleClass: string);
    hideStyleTags(debounceTimer: number): void;
    showStyleTags(debounceTimer: number): void;
    destroyStyleTagNames(): void;
}
//# sourceMappingURL=cssTagManager.d.ts.map