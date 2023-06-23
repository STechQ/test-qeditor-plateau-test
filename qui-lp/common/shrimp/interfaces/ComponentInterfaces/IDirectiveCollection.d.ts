import { IDictionaryNullable } from "../IDictionaryNullable";
import { IComponentCollection } from "./IComponentCollection";
import { IEventData } from "./IEventData";
import { IEventFunctions } from "./IEventFunctions";
export interface IDirectiveElement {
    name: string;
    value?: any;
    expression?: string;
    arg?: string;
    modifiers?: {
        [key: string]: boolean;
    };
}
export interface IDirectiveCollection {
    RegisterDirectiveEvent(directiveName: string, eventData: IEventData): void;
    RegisterDirective(directive: IDirectiveElement): void;
    SetOwner({ ownerComponent }: {
        ownerComponent: IComponentCollection;
    }): void;
    GetEventBoundFunctions(): IEventFunctions;
    Trigger({ handlerName, eventArguments }: {
        handlerName: string;
        eventArguments?: Array<any> | IDictionaryNullable<any>;
    }): any;
    GetDirectives(): Array<IDirectiveElement> | undefined;
}
//# sourceMappingURL=IDirectiveCollection.d.ts.map