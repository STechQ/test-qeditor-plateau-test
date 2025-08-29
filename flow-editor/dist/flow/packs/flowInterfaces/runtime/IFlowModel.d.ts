import { IStepModel, IStepTo } from "./IStepModel";
import { IModelBaseFields } from "../../../../common/everything/workflow/runtimemodels/IModel";
import { Store } from "../../../../common/everything/store/runtimemodels/IStoreModel";
import { IExpressionData } from "./IExpression";
import { BooleanType, ContextType, OutputType } from "../../../../common/everything/dataType/runtimemodels/types";
export type FlowExecutionType = "alive" | "batch";
export declare const wfFuncFlowCanNotBeBatch: FlowExecutionType;
export declare const wfCanNotBeBatch: FlowExecutionType;
export type IFlowModelBase = IModelBaseFields & {
    steps: Record<string, IStepModel>;
    startSteps: Array<IStepTo>;
    store: Store;
    executeType: FlowExecutionType;
};
export type IFlowModel = IFlowModelBase & {
    type: "flow";
    uniqueKey?: Omit<IExpressionData['type'], OutputType | ContextType | BooleanType>;
};
//# sourceMappingURL=IFlowModel.d.ts.map