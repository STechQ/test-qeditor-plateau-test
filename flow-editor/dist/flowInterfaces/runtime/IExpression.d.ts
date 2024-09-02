import { RuntimeMessage } from "./StepRuntime";
export interface IExpressionContext {
    msg: RuntimeMessage;
}
declare type ExpressionGetterReturnType = string | number | boolean | RuntimeMessage | undefined;
export declare type ExpressionGetter = (expression: IExpressionData, context: IExpressionContext) => Array<ExpressionGetterReturnType> | ExpressionGetterReturnType;
export declare type ExpressionSetter = (expression: ISetExpressionData, value: any, context: IExpressionContext) => void;
export interface ISetExpressionData extends IExpressionData {
    type: "msg" | "wholeMsg";
}
export interface IExpressionData {
    type: "enum" | "boolean" | "number" | "string" | "msg" | "wholeMsg" | "notSet";
    value: string;
}
export {};
//# sourceMappingURL=IExpression.d.ts.map