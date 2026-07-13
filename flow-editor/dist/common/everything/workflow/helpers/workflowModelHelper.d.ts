import { IStepDesignModel } from "@stechquick/flow-interfaces/editor/IStepDesignModel";
import { IModelForWorkflow } from "../../../qCloudTemp/quickCloud";
import { ILegacyWorkflowModelForCamunda, IWFStepModel, IWorkflowModel } from "../runtimemodels/IWorkflow";
import { ITask } from "../runtimeObjects/ITask";
import { IWFEDBTask, IWFEDBTaskHistory } from "../runtimeObjects/IWFEDB";
import { IHumanTaskPropType } from "../runtimemodels/stepModels/IHumanTaskPropType";
import { IConnectionDesignModel } from "@stechquick/flow-interfaces/editor/IConnectionDesignModel";
export declare class WorkflowModelHelper {
    static createWFStepId(stepName: string): string;
    static getTaskStepPFromModel(workflowModel: IWorkflowModel, task: ITask | IWFEDBTask | IWFEDBTaskHistory): IHumanTaskPropType | undefined;
    static parseWorkflowModelBody(model: IModelForWorkflow): IWorkflowModel | ILegacyWorkflowModelForCamunda;
    static migrateLegacyStep(step: IWFStepModel): void;
    static migrateLegacyDesignStep(step: IStepDesignModel): void;
    static migrateConnection(connections: Array<IConnectionDesignModel>, steps: Array<IStepDesignModel>): void;
    static parseWorkflowModelBodyWFE(model: IModelForWorkflow, env?: "notification" | "conversion", showError?: (error: string) => void): IWorkflowModel;
    static deParseWorkflowModelBodyWFE(model: IWorkflowModel | ILegacyWorkflowModelForCamunda): ILegacyWorkflowModelForCamunda;
}
//# sourceMappingURL=workflowModelHelper.d.ts.map