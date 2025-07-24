import { IWorkflowDesignModel } from "../../../../common/everything/workflow/designtimemodels/IWorkflowDesignModel";
import { IWorkflowModel } from "../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { IFlowModel } from "../runtime/IFlowModel";
import { IFlowDesignModel } from "./IFlowDesignModel";
export interface IFlowEditorModel {
    runtime: IFlowModel | IWorkflowModel;
    design: IFlowDesignModel | IWorkflowDesignModel;
}
//# sourceMappingURL=IFlowEditorModel.d.ts.map