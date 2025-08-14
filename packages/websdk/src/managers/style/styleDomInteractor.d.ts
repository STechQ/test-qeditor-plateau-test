export declare class StyleDomInteractor {
    private readonly uid;
    private styleTag;
    private isAttached;
    private ruleList?;
    constructor(uid: string);
    private createStyleTag;
    attach(styleTag?: HTMLStyleElement): void;
    detach(): void;
    reset(): void;
    clearRule(index: number): void;
    insertRule(mediaRule: string, index: number): void;
}
//# sourceMappingURL=styleDomInteractor.d.ts.map