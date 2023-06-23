import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
import { IRenderingContext } from "./IRenderingContext";
export interface IHistoryItem {
    additionals?: any;
    GetRenderingContext(): IRenderingContext;
    hibernate(): void;
    readonly pageName?: string;
    readonly pageId: string;
    ReCalculateCompInstDict(): void;
    GetComponentList(): Array<IComponentCollection>;
}
//# sourceMappingURL=IHistoryItem.d.ts.map