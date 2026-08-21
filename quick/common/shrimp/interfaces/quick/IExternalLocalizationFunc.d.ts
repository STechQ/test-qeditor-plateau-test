import { IContextItem } from "../../context";
export declare const ExternalLocalizationFuncContextName: string;
export interface IExternalLocalizationFunc extends IContextItem {
    (key: string, moduleName?: string, pageName?: string): string;
}
//# sourceMappingURL=IExternalLocalizationFunc.d.ts.map