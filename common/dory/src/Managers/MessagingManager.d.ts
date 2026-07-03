import { ContextManager } from "../../../shrimp/context";
import { IComponentCollection } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IDictionaryNullable } from "../../../shrimp/interfaces/IDictionaryNullable";
export declare class MessagingManager {
    static MessagingCompName: string;
    context: ContextManager;
    constructor(context: ContextManager);
    /**
     * Returns a messaging component if it is exists on the given level index
     * @param levelIndex Index that will be searched for Messaging component
     * @returns IComponentCollection
     */
    GetMessagingComponentByLevelIndex(levelIndex: number): IComponentCollection | null;
    /**
     * Get component property value by eventName
     * @param eventName Name of the component event
     * @returns void | null
     */
    Get(eventName: string): Function | undefined;
    /**
     * Trigger an event on current index level of currentLevel
     * @param eventName Event that will be triggered
     * @param parameters Which parameters or arguments that will be passed
     * @returns void
     */
    Trigger({ eventName, parameters }: {
        eventName: string | undefined;
        parameters: Array<any> | IDictionaryNullable<any> | undefined;
    }): any;
}
//# sourceMappingURL=MessagingManager.d.ts.map