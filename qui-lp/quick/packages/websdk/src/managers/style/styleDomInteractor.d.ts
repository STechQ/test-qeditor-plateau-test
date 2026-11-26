import { ShadowDOMManager } from "../ShadowDOMManager";
export interface IDomInteractor {
    attach(): void;
    detach(): void;
    reset(): void;
    clearRule(index: number): void;
    insertRule(mediaRule: string, index: number): void;
}
export declare class StyleDomInteractor implements IDomInteractor {
    private readonly uid;
    private styleTag;
    private isAttached;
    private ruleList?;
    private shadowDOMManager;
    constructor(uid: string, shadowDOMManager: ShadowDOMManager);
    private createStyleTag;
    attach(styleTag?: HTMLStyleElement): void;
    detach(): void;
    reset(): void;
    clearRule(index: number): void;
    insertRule(mediaRule: string, index: number): void;
}
export declare class StyleDomInteractorWithShadow implements IDomInteractor {
    private readonly uid;
    private readonly shadowDOMManager?;
    private styleSheet;
    private isAttached;
    private ruleList?;
    private cssString;
    constructor(uid: string, shadowDOMManager?: ShadowDOMManager | undefined);
    private createStyleTag;
    attach(styleTag?: CSSStyleSheet): void;
    detach(): void;
    reset(): void;
    clearRule(index: number): void;
    insertRule(mediaRule: string, index: number): void;
}
//# sourceMappingURL=styleDomInteractor.d.ts.map