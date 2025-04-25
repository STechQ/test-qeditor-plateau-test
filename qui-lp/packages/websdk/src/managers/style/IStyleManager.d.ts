import { IComponentCollection } from "../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IHistoryAdditionalItem } from "../../../../../common/shrimp/interfaces/RenderingInterfaces/IHistoryItem";
export declare type StyleCB = Record<string, (styleOpt: styleDictParams) => void>;
export interface IStyleManager extends IHistoryAdditionalItem {
    applyStyle: (compCollection: IComponentCollection) => void;
    addStyleRule: (matchStyleParam: matchStyle) => void;
}
export declare type styleDictParams = {
    styleManager: IStyleManager;
    compCollection: IComponentCollection;
    styleValue: string;
    breakPoint?: string;
};
export declare type matchStyle = {
    selector: string;
    selectorValue: string;
    styleValue: string;
    breakPoint?: string;
    compType: string;
};
//# sourceMappingURL=IStyleManager.d.ts.map