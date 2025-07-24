import { ContextManager } from "../../../../../common/shrimp/context";
import { IComponentCollection } from "../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IStyleManager, matchStyle } from "./IStyleManager";
export declare class StyleManager implements IStyleManager {
    readonly uid: any;
    private readonly websdkContext;
    static AdditionalName: "StyleManager";
    static current(compCollection: IComponentCollection, websdkContext: ContextManager): StyleManager;
    private index;
    private cssIndexDict;
    private domInteractor;
    constructor(uid: any, websdkContext: ContextManager);
    attach(): void;
    detach(): void;
    destroy(): void;
    hibernate(): void;
    resurrect(): void;
    private decideCompStyleWithDict;
    applyStyle: (compCollection: IComponentCollection) => void;
    addStyleRule: (matchStyleParam: matchStyle) => void;
    private deleteSheet;
    private addSheet;
    private fromCamelCase;
    deleteCompCollectionStyle: (compCollection: IComponentCollection) => void;
}
//# sourceMappingURL=StyleManager.d.ts.map