import { IComponentCollection } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IDirectiveCollection, IDirectiveElement } from "../../../../shrimp/interfaces/ComponentInterfaces/IDirectiveCollection";
import { IEventFunctions } from "../../../../shrimp/interfaces/ComponentInterfaces/IEventFunctions";
import { IDictionaryNullable } from "../../../../shrimp/interfaces/IDictionaryNullable";
import { Dory } from "../../Dory";
import { EventData } from "./EventData";
export declare class DirectiveCollection implements IDirectiveCollection {
    private directiveEventDict;
    private directives;
    private ownerComponent;
    private dory;
    constructor(dory: Dory);
    SetOwner({ ownerComponent }: {
        ownerComponent: IComponentCollection;
    }): void;
    Trigger({ directiveName, handlerName, eventArguments }: {
        directiveName: string;
        handlerName: string;
        eventArguments?: Array<any> | IDictionaryNullable<any>;
    }): any;
    private GenerateTriggerFunction;
    GetEventBoundFunctions(): IEventFunctions;
    private MatchEventDataToArguments;
    /**
     * Collect all the event as a directive
     * @param directiveName Directive name that will be registered with its name
     * @param eventData Directive event that will be added on dictionary
     */
    RegisterDirectiveEvent(directiveName: string, eventData: EventData): void;
    /**
     * Register a directive on the lise
     * @param directive Current directive that will be added on the list
     */
    RegisterDirective(directive: IDirectiveElement): void;
    /**
     * Return all the directives on this collecyion
     */
    GetDirectives(): IDirectiveElement[] | undefined;
}
//# sourceMappingURL=DirectiveCollection.d.ts.map