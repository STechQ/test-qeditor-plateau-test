import { IExpressionData } from "../../dataType/runtimemodels/IExpression";
import { ActionType } from "../runtimemodels/types";
import { IActionFunction } from "../../action/IActionDesign";
type IActionBase = {
    label: string;
    privileges: Array<string>;
    props?: IActionProp;
};
export type IAction = IActionBase & ({
    actionType: Exclude<ActionType, "save" | "complete" | "return" | "cancel" | "function">;
    actionId?: never;
    designId?: never;
    function?: never;
    description?: never;
} | {
    actionId: string;
    function: IActionFunction;
    description?: string;
    designId?: string;
    actionType?: never;
});
export type IActionData = {
    actionType: Exclude<ActionType, "save" | "complete" | "return" | "cancel">;
    actionId?: never;
} | {
    actionId: string;
    description?: string;
    actionType?: never;
};
export type IActionProp = {
    uniqueKeys?: Array<string>;
    validation?: IExpressionData;
};
export {};
//# sourceMappingURL=IAction.d.ts.map