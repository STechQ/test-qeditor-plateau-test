import { IExpressionData } from "@stechquick/flow-interfaces/runtime";
import { PropValue } from "../../../../flowInterfaces/runtime/IStepModel";
export interface IStepProp {
    setStepProp(stepIDs: Array<string>, propName: string, propValue: PropValue): void;
    setStepOutputs(stepID: string, outputs: Array<string>): void;
    setSwimlaneName(swimlaneId: string, name: IExpressionData): void;
}
export declare const IStepProp: unique symbol;
//# sourceMappingURL=IStepProp.d.ts.map