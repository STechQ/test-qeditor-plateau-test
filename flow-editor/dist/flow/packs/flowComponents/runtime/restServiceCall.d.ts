import { IExpressionData } from "../../../../common/everything/dataType/runtimemodels/IExpression";
import { IExecuteFlowByMapping } from "../../../../common/everything/workflow/runtimemodels/IWorkflow";
export interface IRestServiceCallPropType extends IExecuteFlowByMapping {
    label: IExpressionData;
    description: string;
    ignoreErrorAndContinue?: boolean;
}
//# sourceMappingURL=restServiceCall.d.ts.map