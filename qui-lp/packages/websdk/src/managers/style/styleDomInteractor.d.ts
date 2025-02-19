export declare class StyleDomInteractor {
    private readonly uid;
    private styleSheet;
    private isAttached;
    private ruleList?;
    private cssString;
    constructor(uid: string);
    private createStyleTag;
    attach(styleTag?: CSSStyleSheet): void;
    detach(): void;
    reset(): void;
    clearRule(index: number): void;
    insertRule(mediaRule: string, index: number): void;
}
//# sourceMappingURL=styleDomInteractor.d.ts.map