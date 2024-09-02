import { PropValue } from "../../../../flowInterfaces/runtime/IStepModel";
export interface IStepProp {
    setStepProp(stepIDs: Array<string>, propName: string, propValue: PropValue): void;
    setStepOutputs(stepID: string, outputs: Array<string>): void;
}
export declare const IStepProp: unique symbol;
//# sourceMappingURL=IStepProp.d.ts.map