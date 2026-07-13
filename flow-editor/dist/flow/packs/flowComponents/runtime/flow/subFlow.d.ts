import { IExpressionData, IPropObject } from "@stechquick/flow-interfaces/runtime";
import { IRuntimeParam, RuntimeMessage, StepRuntime } from "@stechquick/flow-interfaces/runtime/StepRuntime";
import { IExecuteFlowByMapping } from "../../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { IStoreMapping } from "../../../../../common/everything/store/runtimemodels/IStoreMapping";
export interface ISubFlowProps extends IExecuteFlowByMapping, IPropObject {
    mapping: IStoreMapping;
    type: "referenced";
}
declare const subFlow: StepRuntime<ISubFlowProps>;
export declare function executeFunction(options: {
    flow: IRuntimeParam["flow"];
    model: IRuntimeParam["model"];
    outerMsg: RuntimeMessage;
    functionId: string;
    inputs?: Record<string, IExpressionData>;
}): Promise<Record<string, IExpressionData>>;
export default subFlow;
//# sourceMappingURL=subFlow.d.ts.map