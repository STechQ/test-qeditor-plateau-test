import { IFlowModel, IPropObject, ISetExpressionData, IStepFrom, IStepModel, IStepTo } from "@stechquick/flow-interfaces/runtime";
import { IStoreMapping } from "../../store/runtimemodels/IStoreMapping";
import { IStoreModelForWorkflow } from "../../store/runtimemodels/IStoreModel";
import { IExpressionData } from "../../dataType/runtimemodels/IExpression";
import { IFlowModelBase } from "@stechquick/flow-interfaces/runtime/IFlowModel";
import { ISLA } from "./ISLA";
export type WorkflowStepName = "start" | "humantask" | "subFlow" | "subWorkflow" | "flow" | "switch" | "end";
declare const userTaskActivityFieldName = "userTaskActivity";
declare const processStatusFieldName = "processStatus";
export declare const NamedModels: {
    readonly getUser: {
        readonly name: "getUser";
        readonly type: "flow";
    };
    readonly notify: {
        readonly name: "notify";
        readonly type: "flow";
    };
    readonly userTaskActivity: {
        readonly name: "userTaskActivity";
        readonly type: "flow";
    };
    readonly preForm: {
        readonly name: "TaskPreview";
        readonly type: "qjson";
    };
    readonly processStatus: {
        readonly name: "ProcessStatus";
        readonly type: "dataSet";
    };
};
export declare const RequiredModels: {
    readonly iPaasEndPoint: {
        readonly name: "IPaaS_Endpoint";
        readonly type: "constant";
    };
};
export type StatusType = "" | "Pending-InProgress" | "Pending-Approval" | "Resolved-Completed" | "New" | "Returned" | "Returned-Originator" | "Returned-Recipient" | "Resolved-Cancelled";
export declare const PROCESS_STATUS_OTHERS_KEY = "Others";
type NamedModelTypeChecker<K extends keyof typeof NamedModels = keyof typeof NamedModels> = {
    [P in Exclude<K, typeof processStatusFieldName>]: P extends typeof userTaskActivityFieldName ? string | undefined : string;
} & {
    [P in Extract<K, typeof processStatusFieldName>]?: string;
};
export type IWorkflowModelNamedModels = NamedModelTypeChecker;
export interface IWorkflowModel extends IFlowModelBase {
    type: "workflow";
    label: IExpressionData;
    description: string;
    namedModels: IWorkflowModelNamedModels;
    name: string;
    _name: string;
    desc: string;
    sla: ISLA;
    steps: Record<string, IWFStepModel>;
    startSteps: Array<IWFStepTo>;
    store: IStoreModelForWorkflow;
    businessKeyGenerationFunction?: IExecuteFlowByMapping;
    fileUploadFunction?: IExecuteFlowByMapping;
    fileDownloadFunction?: IExecuteFlowByMapping;
    fileDeleteFunction?: IExecuteFlowByMapping;
    /** Workflow-level required privileges (AND semantics — user must hold every one to start). Empty / undefined = everyone allowed. */
    privileges?: Array<string>;
}
export interface IWFStepTo extends IStepTo {
}
export interface IWFStepFrom extends IStepFrom {
}
export interface IWFStepModel extends IStepModel {
}
export type IExecuteFlowByMapping = {
    type: "referenced";
    id: string;
    mapping?: IStoreMapping;
};
export type IForm = {
    id: string;
    readonly?: boolean;
};
export interface ICounterPropType extends IPropObject {
    reset: "never" | "daily" | "monthly" | "yearly";
    key: IExpressionData;
    assignTo: ISetExpressionData;
}
export type StepFlowModelPropType = IWFStepInlineFlowModelProps | IExecuteFlowByMapping;
export type StepSubWorkflowPropType = {
    workflowId: string;
    mapping?: IStoreMapping;
};
export type IWFStepInlineFlowModelProps = {
    type: 'inline';
    inline: IFlowModel;
    mapping?: IStoreMapping;
};
export interface IAddActivityPropType extends IPropObject {
    description: string;
    descriptionCode: IExpressionData;
    descriptionActivity: IExpressionData;
}
export interface IAddActivityProp {
    descriptionCode: string;
    description: string;
}
export interface IHandleSlaUpdatesProp {
    type: "workflow" | "userTask";
    inputs?: Record<string, IExpressionData>;
}
export interface IWorkflowEnvironment {
    constValueWithName: Record<string, any>;
    constValueWithID: Record<string, any>;
    constInfoWithID: Record<string, {
        lastModelUpdate: number;
        expireTime: number;
    }>;
    environment: string;
    isLocal: boolean;
    dataSetValueWithName: Record<string, ConvertToDataSet<string>>;
    dataSetValueWithID: Record<string, ConvertToDataSet<string>>;
    dataSetInfoWithID: Record<string, {
        lastModelUpdate: number;
        expireTime: number;
    }>;
}
export type ConvertToDataSet<T extends string> = {
    [K in T]: K;
};
export {};
//# sourceMappingURL=IWorkflow.d.ts.map