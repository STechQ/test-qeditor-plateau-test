import { IContextDepTarget, IStore } from "../../../shrimp/interfaces/quick/IStore";
import { PropCalcContext } from "./PropCalcContext";
export declare class PropDepTracker {
    private static readonly triggerHandlers;
    private static readonly suppressedAccessFields;
    private static readonly suppressedTriggerFields;
    static runWithoutTracking<T>(bindObject: IStore, field: string | number | symbol, cb: () => T): T;
    static runWithoutTrigger<T>(bindObject: IStore, field: string | number | symbol, cb: () => T): T;
    static triggerPaths(bindObject: IStore, rootField: string | number | symbol, paths: Array<string>): void;
    private static isTrackingSuppressed;
    private static isTriggerSuppressed;
    private static runWithSuppressedField;
    /**
     * Create a new object with one way binded
     * @param bindObject Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
     * @param field The property name
     * @param depGetter Get method of subscribed fields
     * @param depTriggerer Trigger method of subscribers
     */
    createDepTracker(bindObject: IStore, field: string | number | symbol, depGetter: (context: PropCalcContext) => IContextDepTarget | undefined, depTriggerer: Function, propCalcContext: PropCalcContext): void;
    private registerTriggerHandler;
    trackAccess({ bindObject, path, depGetter, propCalcContext }: {
        bindObject: IStore;
        path: string;
        depGetter?: (context: PropCalcContext) => IContextDepTarget | undefined;
        propCalcContext: PropCalcContext;
    }): void;
    triggerDependants({ bindObject, paths, depTriggerer, propCalcContext }: {
        bindObject: IStore;
        paths: Array<string>;
        depTriggerer: Function;
        propCalcContext: PropCalcContext;
    }): void;
    /**
     * Getter of one way binded object
     * @param depGetter Get method of subscribed fields
     * @param subscribers Subscriber list of new object
     * @param retVal Return value of new object
     */
    private propGetter;
    /**
     * Setter of one way binded object
     * @param deepTriggerer Trigger method of subscribers
     * @param subscribers Subscriber list of new object
     */
    private propSetter;
    private getScopeInfo;
}
//# sourceMappingURL=PropDepTracker.d.ts.map