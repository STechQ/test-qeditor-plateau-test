import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
import { IMasterData } from "./IMasterData";
import { IRenderingContext } from "./IRenderingContext";
import { IRenderingManager } from "./IRenderingManager";
export interface IHistoryItem {
    GetControlWithTypeName(typeName: string): IComponentCollection | null;
    additionals?: any;
    GetRenderingContext(): IRenderingContext;
    GetRenderingManager(): IRenderingManager | undefined;
    hibernate(): void;
    readonly pageName?: string;
    readonly pageId: string;
    ReCalculateCompInstDict(): void;
    GetComponentList(): Array<IComponentCollection>;
    readonly masterData?: IMasterData;
    setMasterData(masterData: IMasterData): void;
}
//# sourceMappingURL=IHistoryItem.d.ts.map