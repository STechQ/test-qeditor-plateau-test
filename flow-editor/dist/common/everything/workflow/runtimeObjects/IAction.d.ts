import { IExpressionData } from "../../dataType/runtimemodels/IExpression";
import { ObjectWithRoles, StepFlowModelPropType } from "../runtimemodels/IWorkflow";
import { ActionType, CustomType } from "../runtimemodels/types";
export type IAction = ObjectWithRoles & IActionData & {
    label: string;
    props?: IActionProp;
};
export type IActionData = {
    actionType: ActionType;
    customType: CustomType;
};
export type IActionProp = {
    uniqueKeys?: Array<string>;
    userBound?: boolean;
    validation?: IExpressionData;
    function?: StepFlowModelPropType;
};
//# sourceMappingURL=IAction.d.ts.map