import { IComponent } from "../ComponentInterfaces/IComponent";
import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
import { IMasterData } from "./IMasterData";
import { IRenderingContext } from "./IRenderingContext";
import { IRenderingManager } from "./IRenderingManager";
export interface IHistoryAdditionalItem {
    resurrect(): void;
    hibernate(passHibernate?: boolean): void;
    destroy(): void;
}
export declare type IForeachHistoryItemCbParams = {
    nestLevel: number;
} & ({
    isRendered: true;
    historyItem: IHistoryItem;
} | {
    isRendered: false;
});
export interface IHistoryItem {
    GetControlWithTypeName(typeName: string): IComponentCollection | null;
    getAdditional<T extends IHistoryAdditionalItem>(key: string): T | undefined;
    getOrCreateAdditional<T extends IHistoryAdditionalItem>(key: string, creatorCb: () => T): T;
    GetRenderingContext(): IRenderingContext;
    GetRenderingManager(): IRenderingManager | undefined;
    hibernate(passHibernate?: boolean): void;
    resurrect(): void;
    readonly pageName?: string;
    readonly pageId: string;
    ReCalculateCompInstDict(): void;
    GetComponentList(): Array<IComponentCollection>;
    readonly masterData?: IMasterData;
    setMasterData(masterData: IMasterData): void;
    foreachHistoryItem(cb: (cbParam: IForeachHistoryItemCbParams) => void): void;
    findHistoryItem(cb: (cbParam: IForeachHistoryItemCbParams) => boolean, nestLevel?: number): IHistoryItem | undefined;
    getCompCollectionById(id: string | IComponent): IComponentCollection | undefined;
}
//# sourceMappingURL=IHistoryItem.d.ts.map