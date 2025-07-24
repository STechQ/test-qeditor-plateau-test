import { IStepOptions } from "../../../../flowInterfaces/editor/IStepOptions";
import { IPoint } from "../../../../flowInterfaces/editor/shape/IPoint";
import { IStepInstance } from "../viewModel/IViewModel";
export interface IItemInfo {
    ID: string;
    type: "step" | "connection";
}
export interface IFlow {
    addStep(stepName: string, point: IPoint, version: string): void;
    stepAdded(stepID: string, stepName: string, stepOptions: IStepOptions, props: IStepInstance["propValues"]): void;
    stepDeleted(stepIDs: Array<string>): Array<string>;
    connectionAdded(connID: string, from: {
        step: string;
        output: string;
    }, to: {
        step: string;
        input: string;
    }): void;
    connectionDeleted(connIDs: Array<string>): Array<string>;
}
export declare const IFlow: unique symbol;
//# sourceMappingURL=IFlow.d.ts.map