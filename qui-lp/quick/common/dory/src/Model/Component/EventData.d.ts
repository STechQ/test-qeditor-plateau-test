import { ContextManager } from "../../../../shrimp/context";
import { IComponentCollection } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IEventData } from "../../../../shrimp/interfaces/ComponentInterfaces/IEventData";
import { ScriptLang } from "../../../../shrimp/interfaces/Scripting/scriptLang";
import { IEvaluator } from "../../../../shrimp/interfaces/Scripting/IEvaluator";
import { Dory } from "../../Dory";
import { IQuickFlowModelRuntime } from "../../../../shrimp/interfaces/ComponentInterfaces/ICompJson";
type EventDataType = "event" | "directive";
export declare class EventData implements IEventData {
    eventName: string;
    private ownerComponent?;
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
    private eventType;
    constructor({ eventName, handler, context, eventParameters, immediate, customEvent, propertyEvent, triggerOrder, externalVisible, handlerLang, scopeObject, eventType }: {
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
        eventType: EventDataType;
    });
    SetOwner({ ownerComponent }: {
        ownerComponent: IComponentCollection;
    }): void;
    GetOwner(owners: {
        ownerComponent?: IComponentCollection;
        ownerEvent?: IEventData;
    }, dory: Dory): void;
    Trigger({ evaluator, dataSource }: {
        evaluator: IEvaluator;
        dataSource: any;
    }): any;
    AttachCompletionPromise(prom: Promise<any>): void;
    private awaitAllPromises;
}
export {};
//# sourceMappingURL=EventData.d.ts.map