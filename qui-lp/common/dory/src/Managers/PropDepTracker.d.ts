import { IContextDepTarget, IStore } from "../../../shrimp/interfaces/quick/IStore";
import { PropCalcContext } from "./PropCalcContext";
export declare class PropDepTracker {
    /**
     * Create a new object with one way binded
     * @param bindObject Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
     * @param field The property name
     * @param depGetter Get method of subscribed fields
     * @param depTriggerer Trigger method of subscribers
     */
    createDepTracker(bindObject: IStore, field: string | number | symbol, depGetter: (context: PropCalcContext) => IContextDepTarget | undefined, depTriggerer: Function, propCalcContext: PropCalcContext): void;
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
}
//# sourceMappingURL=PropDepTracker.d.ts.map