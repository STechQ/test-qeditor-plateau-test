export declare class StyleDomInteractor {
    private readonly uid;
    private styleSheet;
    private isAttached;
    private ruleList?;
    private cssString;
    private shadowRoot?;
    constructor(uid: string, shadowRoot?: ShadowRoot);
    private createStyleTag;
    attach(styleTag?: CSSStyleSheet): void;
    detach(): void;
    reset(): void;
    clearRule(index: number): void;
    insertRule(mediaRule: string, index: number): void;
}
//# sourceMappingURL=styleDomInteractor.d.ts.map