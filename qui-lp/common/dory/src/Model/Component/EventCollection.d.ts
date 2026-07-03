import { IComponentCollection } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IEventCollection } from "../../../../shrimp/interfaces/ComponentInterfaces/IEventCollection";
import { IEventFunctions } from "../../../../shrimp/interfaces/ComponentInterfaces/IEventFunctions";
import { IDictionary } from "../../../../shrimp/interfaces/IDictionary";
import { IDictionaryNullable } from "../../../../shrimp/interfaces/IDictionaryNullable";
import { Dory } from "../../Dory";
import { EventData } from "./EventData";
export declare class EventCollection implements IEventCollection {
    private eventDict;
    private ownerComponent;
    private dory;
    constructor(dory: Dory);
    RegisterEvent({ eventData }: {
        eventData: EventData;
    }): void;
    SetOwner({ ownerComponent }: {
        ownerComponent: IComponentCollection;
    }): void;
    Trigger({ eventName, eventArguments, immediate }: {
        eventName: string;
        eventArguments?: Array<any> | IDictionaryNullable<any>;
        immediate?: boolean;
    }): any;
    private GenerateTriggerFunction;
    GetExternalEventBoundFunctions(): IDictionary<Function>;
    GetEventBoundFunctions(): IEventFunctions;
    private MatchEventDataToArguments;
}
//# sourceMappingURL=EventCollection.d.ts.map