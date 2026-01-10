import { IFlowModel, IPropObject, ISetExpressionData, IStepFrom, IStepModel, IStepTo } from "@stechquick/flow-interfaces/runtime";
import { IStoreMapping } from "../../store/runtimemodels/IStoreMapping";
import { IStoreModelForWorkflow } from "../../store/runtimemodels/IStoreModel";
import { ISwitchProps } from "../../flow/runtimeModels/ISwitch";
import { IExpressionData } from "../../dataType/runtimemodels/IExpression";
import { IFlowModelBase } from "@stechquick/flow-interfaces/runtime/IFlowModel";
import { ILegacySLA, ISLA } from "./ISLA";
import { IAction } from "../runtimeObjects/IAction";
import { OmitTyped } from "../../../helpers/typeHelper";
export type WorkflowStepName = "start" | "humantask" | "subFlow" | "flow" | "switch" | "end";
declare const userTaskActivityFieldName = "userTaskActivity";
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
};
export declare const RequiredModels: {
    readonly iPaasEndPoint: {
        readonly name: "IPaaS_Endpoint";
        readonly type: "constant";
    };
};
export declare const StatusTypes_EN: Record<StatusType, string>;
export declare const StatusTypes_TR: Record<StatusType, string>;
export type StatusType = "" | "Pending-InProgress" | "Pending-Approval" | "Resolved-Completed" | "New" | "Returned" | "Returned-Originator" | "Returned-Recipient" | "Resolved-Cancelled";
type NamedModelTypeChecker<K extends keyof typeof NamedModels = keyof typeof NamedModels> = {
    [P in K]: P extends typeof userTaskActivityFieldName ? string | undefined : string;
};
export type IWorkflowModelNamedModels = NamedModelTypeChecker;
export interface IOldCamundaFieldsForWFModel {
    sla: ILegacySLA;
    priority: number;
}
export interface IWorkflowModel extends IFlowModelBase {
    type: "workflow";
    label: IExpressionData;
    description: string;
    namedModels: IWorkflowModelNamedModels;
    name: string;
    _name: string;
    desc: string;
    swimlanes: Record<string, IExpressionData>;
    sla: ISLA;
    roles: Record<string, IExpressionData>;
    steps: Record<string, IWFStepModel>;
    startSteps: Array<IWFStepTo>;
    store: IStoreModelForWorkflow;
    businessKeyGenerationFunction?: IExecuteFlowByMapping;
    fileUploadFunction?: IExecuteFlowByMapping;
    fileDownloadFunction?: IExecuteFlowByMapping;
    fileDeleteFunction?: IExecuteFlowByMapping;
    oldCamundaFieldsForWFModel?: IOldCamundaFieldsForWFModel;
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
export type IForm = ObjectWithRoles & {
    id: string;
    readonly?: boolean;
};
export interface ObjectWithRoles {
    roles: Array<string>;
}
export interface ICounterPropType extends IPropObject {
    reset: "never" | "daily" | "monthly" | "yearly";
    key: IExpressionData;
    assignTo: ISetExpressionData;
}
export type StepFlowModelPropType = IWFStepInlineFlowModelProps | IExecuteFlowByMapping;
export type IWFStepInlineFlowModelProps = {
    type: 'inline';
    inline: IFlowModel;
    mapping?: IStoreMapping;
};
export interface ILegacyWorkflowModelForCamunda extends OmitTyped<IWorkflowModel, "steps" | "sla"> {
    steps: Record<string, ILegacyWFStepModelForCamunda>;
    priority: number;
    sla: ILegacySLA;
}
export interface ILegacyWFStepModelForCamunda extends OmitTyped<IStepModel, "P"> {
    P?: ILegacyWFPropObjectForCamunda;
    S?: string;
}
export type ILegacyWFPropObjectForCamunda = IPropObject & {
    label: IExpressionData;
    stepId: string;
    name?: string;
    version?: string;
    swimlane: string;
    props: IWFStepInlineFlowModelProps | ILegacyWFStepPropsForCamunda | ISwitchProps;
};
export interface ILegacyWFStepPropsForCamunda {
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
    sla?: ILegacySLA;
}
export interface IAddActivityPropType extends IPropObject {
    description: string;
    descriptionCode: IExpressionData;
    descriptionActivity: IExpressionData;
}
export interface IAddActivityProp {
    descriptionCode: string;
    description: string;
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