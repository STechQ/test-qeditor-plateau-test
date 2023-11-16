import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
import { IRenderingContext } from "./IRenderingContext";
import { IRenderingManager } from "./IRenderingManager";
export interface IHistoryItem {
    additionals?: any;
    GetRenderingContext(): IRenderingContext;
    GetRenderingManager(): IRenderingManager | undefined;
    hibernate(): void;
    readonly pageName?: string;
    readonly pageId: string;
    ReCalculateCompInstDict(): void;
    GetComponentList(): Array<IComponentCollection>;
}
//# sourceMappingURL=IHistoryItem.d.ts.map