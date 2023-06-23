import { ContextManager } from "../../../../shrimp/context";
import { IComponentCollection } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IEventData } from "../../../../shrimp/interfaces/ComponentInterfaces/IEventData";
import { ScriptLang } from "../../../../shrimp/interfaces/Scripting/scriptLang";
import { IEvaluator } from "../../../../shrimp/interfaces/Scripting/IEvaluator";
import { Dory } from "../../Dory";
import { IQuickFlowModelRuntime } from "../../../../shrimp/interfaces/ComponentInterfaces/ICompJson";
export declare class EventData implements IEventData {
    eventName: string;
    ownerComponent?: IComponentCollection;
    handler: string | IQuickFlowModelRuntime;
    eventParams?: Array<{
        name: string;
        type?: string;
    }>;
    creationContext: ContextManager;
    immediate: boolean;
    customEvent: boolean;
    propertyEvent: boolean;
    triggerOrder: number | null;
    externalVisible?: boolean;
    handlerLang?: ScriptLang;
    scopeObject?: Record<string, any>;
    private promisses;
    private promiseCallbacks;
    constructor({ eventName, handler, context, eventParameters, immediate, customEvent, propertyEvent, triggerOrder, externalVisible, handlerLang, scopeObject }: {
        eventName: string;
        handler: string | IQuickFlowModelRuntime;
        context: ContextManager;
        eventParameters?: string | undefined;
        immediate?: boolean | undefined;
        customEvent?: boolean;
        propertyEvent?: boolean | undefined;
        triggerOrder?: number | null;
        externalVisible?: boolean;
        handlerLang?: ScriptLang;
        scopeObject?: Record<string, any>;
    });
    SetOwner({ ownerComponent }: {
        ownerComponent: IComponentCollection;
    }): void;
    GetOwner(owners: {
        ownerComponent?: IComponentCollection;
        ownerEvent?: IEventData;
    }, dory: Dory): Dory;
    Trigger({ evaluator, dataSource }: {
        evaluator: IEvaluator;
        dataSource: any;
    }): any;
    AttachCompletionPromise(prom: Promise<any>): void;
    private awaitAllPromises;
}
//# sourceMappingURL=EventData.d.ts.map