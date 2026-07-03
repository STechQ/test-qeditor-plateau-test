import { IModelForWorkflow } from "../../../qCloudTemp/quickCloud";
import { IWorkflowModel } from "../runtimemodels/IWorkflow";
import { ITask } from "../runtimeObjects/ITask";
import { IWFEDBTask, IWFEDBTaskHistory } from "../runtimeObjects/IWFEDB";
import { IHumanTaskPropType } from "../runtimemodels/stepModels/IHumanTaskPropType";
export declare class WorkflowModelHelper {
    static createWFStepId(stepName: string): string;
    static getTaskStepPFromModel(workflowModel: IWorkflowModel, task: ITask | IWFEDBTask | IWFEDBTaskHistory): IHumanTaskPropType | undefined;
    static parseWorkflowModelBody(model: IModelForWorkflow): IWorkflowModel;
}
//# sourceMappingURL=workflowModelHelper.d.ts.map