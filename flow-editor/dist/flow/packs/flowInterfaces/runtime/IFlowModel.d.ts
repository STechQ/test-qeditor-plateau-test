import { IStepModel, IStepTo } from "./IStepModel";
import { IModelBaseFields } from "../../../../common/everything/workflow/runtimemodels/IModel";
import { Store } from "../../../../common/everything/store/runtimemodels/IStoreModel";
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
};
//# sourceMappingURL=IFlowModel.d.ts.map