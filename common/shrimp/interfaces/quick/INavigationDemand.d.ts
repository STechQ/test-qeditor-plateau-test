import { IHistoryManager } from "./IHistoryManager";
export declare enum INavigationDemandType {
    forward = "forward",
    back = "back"
}
export interface INavigationDemand {
    pageId?: string;
    pageName?: string;
    navigationDemandType?: INavigationDemandType;
    step?: number;
    ownerHistoryManager?: IHistoryManager;
    externalHistoryRouter?: boolean;
}
//# sourceMappingURL=INavigationDemand.d.ts.map