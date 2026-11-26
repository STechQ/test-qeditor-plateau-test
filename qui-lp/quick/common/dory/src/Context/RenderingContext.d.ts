import { IContextItem } from "../../../shrimp/context";
import { IComponentCollection } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IEventData } from "../../../shrimp/interfaces/ComponentInterfaces/IEventData";
import { IHistoryBasedShellConfiguration } from "../../../shrimp/interfaces/quick/IShellConfiguration";
import { IRenderingContext } from "../../../shrimp/interfaces/RenderingInterfaces/IRenderingContext";
import { SimpleCallBack } from "../../../shrimp/interfaces/SimpleCallBack";
export declare class RenderingContext implements IRenderingContext, IContextItem {
    static ContextName: string;
    contextName: string;
    ownerComponent?: IComponentCollection;
    ownerEvent?: IEventData;
    private componentInCreation?;
    private isRendering;
    private isRenderingEventsComplete;
    private callbacks;
    private sequentialCallBacks;
    private postRenderRootCallbacks;
    private compParentInst?;
    private _historyBasedConf;
    get HistoryBasedConf(): IHistoryBasedShellConfiguration;
    set ComponentInCreation(value: IComponentCollection | undefined);
    get ComponentInCreation(): IComponentCollection | undefined;
    constructor({ compParentInst, historyBasedConf }: {
        compParentInst?: any;
        historyBasedConf: IHistoryBasedShellConfiguration;
    });
    SetOwnersAndRetrieveOld(newOwners: {
        ownerComponent?: IComponentCollection;
        ownerEvent?: IEventData;
    }): {
        ownerComponent: IComponentCollection | undefined;
        ownerEvent: IEventData | undefined;
    };
    getCompParentInst(): any;
    startRendering(): void;
    postRenderRoot(): void;
    endRendering(): void;
    IsRendering(): boolean;
    IsRenderingEventsComplete(): boolean;
    delayPostRenderRoot({ cb }: {
        cb: SimpleCallBack;
    }): void;
    executeOrDelayEvent({ cb, immediateEvent, triggerOrder }: {
        cb: Function;
        immediateEvent: boolean;
        triggerOrder: number | null;
    }): any;
}
//# sourceMappingURL=RenderingContext.d.ts.map