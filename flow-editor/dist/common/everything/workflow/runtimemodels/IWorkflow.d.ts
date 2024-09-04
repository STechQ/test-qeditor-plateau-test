import { IFlowModel, IPropObject, ISetExpressionData, IStepFrom, IStepModel, IStepTo } from "@stechquick/flow-interfaces/runtime";
import { IStoreMapping } from "../../store/runtimemodels/IStoreMapping";
import { IStoreModelForWorkflow } from "../../store/runtimemodels/IStoreModel";
import { ISwitchProps } from "../../flow/runtimeModels/ISwitch";
import { IExpressionData } from "../../dataType/runtimemodels/IExpression";
import { IFlowModelBase } from "@stechquick/flow-interfaces/runtime/IFlowModel";
import { ISLA } from "./ISLA";
import { IAction } from "../runtimeObjects/IAction";
export type WorkflowStepName = "start" | "humantask" | "subFlow" | "flow" | "switch" | "end";
export declare const NamedModels: {
    getUser: {
        name: string;
        type: "flow";
    };
    notify: {
        name: string;
        type: "flow";
    };
    preForm: {
        name: string;
        type: "qjson";
    };
};
export declare const StatusTypes_EN: Record<StatusType, string>;
export declare const StatusTypes_TR: Record<StatusType, string>;
export type StatusType = "" | "inProgress" | "waitForApproval" | "completed" | "new" | "returned" | "cancelled" | "waitForControl";
export type IWorkflowModelNamedModels = Record<keyof typeof NamedModels, string>;
export interface IWorkflowModel extends IFlowModelBase {
    type: "workflow";
    label: IExpressionData;
    description: string;
    namedModels?: IWorkflowModelNamedModels;
    name: string;
    _name: string;
    desc: string;
    swimlanes: Record<string, IExpressionData>;
    priority: number;
    sla: ISLA;
    roles: Record<string, IExpressionData>;
    steps: Record<string, IWFStepModel>;
    startSteps: Array<IWFStepTo>;
    store: IStoreModelForWorkflow;
    businessKeyGenerationFunction?: IExecuteFlowByMapping;
    fileUploadFunction?: IExecuteFlowByMapping;
    fileDownloadFunction?: IExecuteFlowByMapping;
    fileDeleteFunction?: IExecuteFlowByMapping;
}
export interface IWFStepTo extends IStepTo {
}
export interface IWFStepFrom extends IStepFrom {
}
export interface IWFStepModel extends IStepModel {
    P?: IWFPropObject;
    S?: string;
}
export type IWFPropObject = IPropObject & {
    stepId: string;
    name?: string;
    version?: string;
    swimlane: string;
    props: IWFStepInlineFlowModelProps | IWFStepProps | ISwitchProps;
};
export type StepFlowModelPropType = IWFStepInlineFlowModelProps | IExecuteFlowByMapping;
export type IWFStepInlineFlowModelProps = {
    type: 'inline';
    inline: IFlowModel;
    mapping?: IStoreMapping;
};
export type IExecuteFlowByMapping = {
    type: "referenced";
    id: string;
    mapping?: IStoreMapping;
};
export type IWFStepProps = {
    type: "humanStartEnd";
    label?: IExpressionData;
    taskName?: IExpressionData;
    procesStatus: StatusType;
    taskStatus?: StatusType;
    sendTo?: "swimlane" | "user";
    user?: string;
    forms: Array<IForm>;
    actions: Array<IAction>;
    priority?: number;
    sla?: ISLA;
};
export type IForm = ObjectWithRoles & {
    id: string;
    readonly?: boolean;
};
export interface ICounterPropType {
    label: IExpressionData;
    description: string;
    reset: "never" | "daily" | "monthly" | "yearly";
    key: IExpressionData;
    assignTo: ISetExpressionData;
}
export interface ObjectWithRoles {
    roles: Array<string>;
}
//# sourceMappingURL=IWorkflow.d.ts.map