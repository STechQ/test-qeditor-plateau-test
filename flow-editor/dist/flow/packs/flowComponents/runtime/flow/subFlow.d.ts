import { StepRuntime } from "@stechquick/flow-interfaces/runtime/StepRuntime";
import { IExecuteFlowByMapping } from "../../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { IStoreMapping } from "../../../../../common/everything/store/runtimemodels/IStoreMapping";
import { IPropObject } from "@stechquick/flow-interfaces/runtime";
export interface ISubFlowProps extends IExecuteFlowByMapping, IPropObject {
    mapping: IStoreMapping;
    type: "referenced";
}
declare const subFlow: StepRuntime<ISubFlowProps>;
export default subFlow;
//# sourceMappingURL=subFlow.d.ts.map