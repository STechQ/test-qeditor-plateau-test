import { IExpressionDataFiltered } from "../../../../../../common/everything/dataType/runtimemodels/IExpression";
import { ValidationErrorHelper } from "../../../../common/ValidationErrorHelper";
import { PropValue } from "../../../../flowInterfaces/runtime/IStepModel";
export interface IStepProp {
    setStepProp(stepIDs: Array<string>, propName: string, propValue: PropValue, data?: Record<string, string>): Promise<Array<string> | void>;
    setStepID(oldId: string, newId: string): ValidationErrorHelper | null;
    setStepOutputs(stepID: string, outputs: Array<string>): void;
    setSwimlaneName(swimlaneId: string, name: IExpressionDataFiltered<"string" | "literal">): void;
}
export declare const IStepProp: unique symbol;
//# sourceMappingURL=IStepProp.d.ts.map