import { IPerfable } from "../../src/Performance/IPerfable";
import { IEvaluator } from "../Scripting/IEvaluator";
import { IComponentCollection } from "./IComponentCollection";
export interface IEventData extends IPerfable {
    immediate: boolean;
    eventName: string;
    SetOwner({ ownerComponent }: {
        ownerComponent: IComponentCollection;
    }): void;
    Trigger({ evaluator, response, dataSource }: {
        evaluator: IEvaluator;
        response: any;
        dataSource: any;
    }): any;
    AttachCompletionPromise(prom: Promise<any>): void;
}
//# sourceMappingURL=IEventData.d.ts.map