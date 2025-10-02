import { IWorkflowModel, StepFlowModelPropType } from "../../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { IWorkflowExecutionContext } from "../../../../../common/everything/workflow/runtimeObjects/IWorkflowExecutionContext";
import { IWFEDBTask, IWFEDBProcessInst, IWFEDBProcessInstHistory, IWFEDBSLA, IWFEDBNotes, IWFEDBFiles, IWFEDBActivity, IWFEDBActivityHistory, IWFEDBTaskHistory } from "../../../../../common/everything/workflow/runtimeObjects/IWFEDB";
import { DataInstance } from "../../../../../common/everything/workflow/runtimeObjects/DataInstance";
import { IProcessInstance } from "../../../../../common/everything/workflow/runtimeObjects/namedobjects/IProcessInstance";
import { ITask } from "../../../../../common/everything/workflow/runtimeObjects/ITask";
import { IAction, IActionData } from "../../../../../common/everything/workflow/runtimeObjects/IAction";
import { ISLA } from "../../../../../common/everything/workflow/runtimemodels/ISLA";
import { INote } from "../../../../../common/everything/workflow/runtimeObjects/namedobjects/INote";
import { IFile } from "../../../../../common/everything/workflow/runtimeObjects/namedobjects/IFile";
import { IUser } from "../../../../../common/everything/workflow/runtimeObjects/namedobjects/IUser";
import { IActivity } from "../../../../../common/everything/workflow/runtimeObjects/IActivity";
import { IWFEAuthzResult } from "../../../../../common/everything/workflow/runtimeObjects/IWFEAuthzResult";
import { IWorkflowContext } from "../../../../../common/everything/workflow/runtimeObjects/IWorkflowContext";
export interface IWFEEventStep {
    name: string;
    ID: string;
    label: string;
    action: IAction;
}
export interface IConvertFromIProcessInstanceOptions {
    stepStates: IWFEDBProcessInst["stepStates"];
    wfInput: IWFEDBProcessInst["wfInput"];
}
export interface IWFExecutionParams {
    initiatorUserId: string | undefined;
}
export interface IPlatformWFEAdaptor {
    runFunctionWithProps: (props: StepFlowModelPropType) => Promise<any>;
    getConstant: (modelId: string) => Promise<any> | any;
    wfExecutionContext: () => IWorkflowExecutionContext;
    wffContext: () => IWorkflowContext;
    wffContextNoProcessInstance(): IWorkflowContext;
    authz: {
        canUserStartProcess: (user: IUser, startAction: IAction) => Promise<IWFEAuthzResult>;
        canUserPerformActionOnTask: (user: IUser, task: IWFEDBTask, taskAction: IAction, activityList: Array<IActivity>, processInstance: IProcessInstance) => Promise<IWFEAuthzResult>;
    };
    system: {
        getParam<K extends keyof IWFExecutionParams>(key: K): IWFExecutionParams[K];
        gracefulEnd: () => void;
        createDataInstance: () => Promise<DataInstance>;
        generateBusinessKeyWFE: () => Promise<string>;
        createSLA: (slaId: string) => Promise<{
            sla: IWFEDBSLA;
            priority: ITask["priority"];
        }>;
        resolveSwimlane: (swimlaneId: string | undefined) => Promise<string>;
        resolveUser: (userId: string) => Promise<IUser>;
    };
    converters: {
        convertToIProcessInstAndIDataInst: (pi: IWFEDBProcessInst | IWFEDBProcessInstHistory) => Promise<{
            processInstance: IProcessInstance;
            dataInstance: DataInstance;
        }>;
        convertToITask: (tasks: IWFEDBTask, workflowModel: IWorkflowModel) => ITask;
        convertToIActivities: (dbActivities: Array<IWFEDBActivity | IWFEDBActivityHistory>) => Array<IActivity>;
        convertFromIProcessInstAndIDataInst: (pi: IProcessInstance, di: DataInstance, options: IConvertFromIProcessInstanceOptions) => IWFEDBProcessInst;
        convertFromIProcessInstanceHistory: (pi: IProcessInstance, di: DataInstance, options: IConvertFromIProcessInstanceOptions) => IWFEDBProcessInstHistory;
        convertFromINote: (notes: Array<INote>, processInstanceId: string, businessKey: string) => Array<IWFEDBNotes>;
        convertFromIFiles(files: Array<IFile>, processInstanceId: string, businessKey: string): Array<IWFEDBFiles>;
    };
    events: {
        processStatusChanged(options: {
            oldStatus: IProcessInstance["status"];
            processInstance: IProcessInstance;
            task: IWFEDBTask;
            lastAction: IActionData;
        }): Promise<void>;
        threadRetried(toStep: {
            ID: string;
            label: string | undefined;
        }): Promise<void>;
        processCreated: (curStep: IWFEEventStep, processInstance: IProcessInstance, dataInstance: DataInstance, dbProcess: IWFEDBProcessInst, sla?: ISLA) => Promise<void>;
        userTaskCreated: (task: IWFEDBTask, processInstance: IProcessInstance, dataInstance: DataInstance, lastAction: IActionData, statusChange: {
            oldStatus: IProcessInstance["status"];
        } | undefined, sla?: ISLA) => Promise<void>;
        preUserTaskComplete: (task: IWFEDBTask, taskAction: IAction, processInstance: IProcessInstance, dataInstance: DataInstance) => Promise<void>;
        userTaskCompleted: (task: IWFEDBTaskHistory, taskAction: IAction, processInstance: IProcessInstance, dataInstance: DataInstance, sla?: ISLA) => Promise<void>;
        processEnded: (lastAction: IActionData, processInstance: IProcessInstance, dataInstance: DataInstance, sla?: ISLA) => Promise<void>;
    };
}
//# sourceMappingURL=IPlatformWFEAdaptor.d.ts.map