import { IStepOptions } from "../../../../flowInterfaces/editor/IStepOptions";
import { IPoint } from "../../../../flowInterfaces/editor/shape/IPoint";
import { IStepInstance } from "../viewModel/IViewModel";
export interface IItemInfo {
    ID: string;
    type: "step" | "connection";
}
export interface IFlow {
    addStep(stepName: string, point: IPoint, version: string): void;
    stepAdded(stepID: string, stepName: string, stepOptions: IStepOptions, props: IStepInstance["propValues"], swimlane: string, oldCamundaFields?: IStepInstance["oldCamundaFields"]): void;
    stepDeleted(stepIDs: Array<string>): Array<string>;
    connectionAdded(connID: string, from: {
        step: string;
        output: string;
    }, to: {
        step: string;
        input: string;
    }): void;
    connectionDeleted(connIDs: Array<string>): Array<string>;
    changeOutputName(stepId: string, oldName: string, newName: string): void;
    changeOutput(connectionId: string, outputName: string): void;
    editOutput(stepId: string, outputName: string, x: number, y: number): void;
}
export declare const IFlow: unique symbol;
//# sourceMappingURL=IFlow.d.ts.map