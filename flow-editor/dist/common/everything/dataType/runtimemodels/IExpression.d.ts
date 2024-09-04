import { IEnvironment } from "@stechquick/flow-interfaces/runtime/IEnvironment";
import { RuntimeMessage } from "@stechquick/flow-interfaces/runtime/StepRuntime";
import { ExpressionDataTypes, SetExpressionDataTypes } from "./types";
export type ISetExpressionData = IExpressionData & {
    type: SetExpressionDataTypes;
};
export type IExpressionData = {
    type: ExpressionDataTypes;
    value: string;
};
type ExpressionGetterReturnType = string | number | boolean | RuntimeMessage | undefined;
export type ExpressionGetter = (expression: IExpressionData, msg: RuntimeMessage, environment: IEnvironment) => Array<ExpressionGetterReturnType> | ExpressionGetterReturnType;
export type ExpressionSetter = (expression: ISetExpressionData, value: any, msg: RuntimeMessage, environment: IEnvironment) => void;
export type IExpressionDataTypeSelection<T extends IExpressionData["type"]> = Extract<T, T>;
export {};
//# sourceMappingURL=IExpression.d.ts.map