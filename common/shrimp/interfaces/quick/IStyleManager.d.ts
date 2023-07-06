import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
export declare type StyleCB = Record<string, (styleOpt: styleDictParams) => void>;
export interface IStyleManager {
}
export declare type styleDictParams = {
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