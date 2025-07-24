import { OmitTyped } from "../../../helpers/typeHelper";
import { IStepStates } from "../../flow/runtimeObjects/IStepStates";
import { IActionData } from "./IAction";
import { IActivity } from "./IActivity";
import { ITask } from "./ITask";
import { IFile } from "./namedobjects/IFile";
import { INote } from "./namedobjects/INote";
import { IProcessInstance } from "./namedobjects/IProcessInstance";
import { ISLA } from "./namedobjects/ISLA";
import { IUser } from "./namedobjects/IUser";
import { IAdditionalInfo } from "./IWorkflowIncomingRequest";
export type DBDateEPOC = number;
export type DBReturn<T> = T & {
    _id: string;
};
export type IWFEDBSLA = {
    [K in keyof ISLA]: K extends "slaDueGoal" | "slaDueCritical" | "slaDueDeadline" ? DBDateEPOC : never;
};
export interface IWFEDBProcessInst {
    processInstanceId: string;
    appId: string;
    processId: string;
    startDate: DBDateEPOC;
    updatedAt: DBDateEPOC;
    businessKey: IProcessInstance["businessKey"];
    name: IProcessInstance["processName"];
    version: IProcessInstance["processVersion"];
    clusterId: IProcessInstance["clusterId"];
    initiatorUser: IProcessInstance["initiatorUser"];
    sla: IWFEDBSLA;
    priority: IProcessInstance["priority"];
    lastUpdateUser: IProcessInstance["lastUpdateUser"];
    lastUpdateDescriptionCode?: IProcessInstance["lastUpdateDescriptionCode"];
    lastUpdateDescription?: IProcessInstance["lastUpdateDescription"];
    customStatus: IProcessInstance["status"];
    wfInput?: Record<string, any>;
    stepStates?: IStepStates;
    dataInstance: {
        [key: string]: any;
    };
}
export interface IWFEDBProcessInstHistory extends OmitTyped<IWFEDBProcessInst, "stepStates"> {
    status: "completed";
    endDate: DBDateEPOC;
}
export declare const flowThreadIdField: "flowThreadId";
export interface IWFEDBTask {
    taskId: string;
    processId: string;
    stepId: string;
    stepInputName: string;
    processInstanceId: string;
    businessKey: IWFEDBProcessInst["businessKey"];
    [flowThreadIdField]: IWFEDBThreadState[typeof flowThreadIdField];
    startDate: DBDateEPOC;
    updatedAt: DBDateEPOC;
    customStatus: ITask["status"];
    taskLabel: ITask["taskLabel"];
    userId?: ITask["userId"];
    userName?: ITask["userName"];
    swimlane?: ITask["swimlane"];
    sla: IWFEDBSLA;
    priority?: ITask["priority"];
}
export interface IWFEDBTaskHistory extends OmitTyped<OmitTyped<IWFEDBTask, "updatedAt">, "flowThreadId"> {
    updatedAt: undefined;
    status: "completed";
    action?: IActionData;
    performerUserId: string;
    endDate: DBDateEPOC;
}
export interface IWFEDBThreadState {
    [flowThreadIdField]: string;
    processId: string;
    processInstanceId: string;
    businessKey: IWFEDBProcessInst["businessKey"];
    stepId: string;
    stepName: string;
    stepLabel: string;
    inputName: string;
    createDate: DBDateEPOC;
    updateDate: DBDateEPOC;
    error?: {
        message: string;
    };
    isSystemStep: true | undefined | false;
    isNotified?: boolean;
    action?: IActionData;
    ongoing: {
        user: IUser;
        additionalHeaders: string | undefined;
        additionalInfo: IAdditionalInfo;
    };
}
export interface IWFEDBThreadStateHistory extends OmitTyped<OmitTyped<OmitTyped<OmitTyped<OmitTyped<IWFEDBThreadState, "createDate">, "updateDate">, "ongoing">, "isSystemStep">, "isNotified"> {
    type: "fail" | "stop" | "next";
    stepStartDate?: DBDateEPOC;
    stepEndDate?: DBDateEPOC;
    error?: {
        message: string;
        time: DBDateEPOC;
    };
}
export interface IWFEDBActivity {
    id: string;
    processInstanceId: string;
    businessKey: string;
    stepId?: string;
    taskId?: IActivity["taskId"];
    taskLabel?: IActivity["taskLabel"];
    uniqueKeys?: IActivity["uniqueKeys"];
    actionLabel?: IActivity["actionLabel"];
    actionType?: IActivity["actionType"];
    customType?: IActivity["customType"];
    user: IActivity["user"];
    assignedUserId?: IActivity["assignedUserId"];
    assignedSwimlaneId?: IActivity["assignedSwimlaneId"];
    time: DBDateEPOC;
    slaDueGoal?: DBDateEPOC;
    slaDueDeadline?: DBDateEPOC;
    slaDueCritical?: DBDateEPOC;
    descriptionCode?: IActivity["descriptionCode"];
    description?: IActivity["description"];
    error?: IActivity["error"];
    status?: IActivity["status"];
    statusDescription?: IActivity["statusDescription"];
    previousStatus?: IActivity["previousStatus"];
}
export interface IWFEDBActivityHistory extends IWFEDBActivity {
}
export interface IWFEDBNotes {
    id: INote["id"];
    processInstanceId: string;
    businessKey: IWFEDBProcessInst["businessKey"];
    createDate: DBDateEPOC;
    updatedAt: DBDateEPOC;
    user: INote["user"];
    note: INote["note"];
}
export interface IWFEDBNotesHistory extends IWFEDBNotes {
}
export interface IWFEDBFiles {
    id: IFile["id"];
    processInstanceId: string;
    businessKey: IWFEDBProcessInst["businessKey"];
    createDate: DBDateEPOC;
    user: IFile["user"];
    label?: IFile["label"];
    fileName?: IFile["fileName"];
    storageHandle?: IFile["storageHandle"];
    fileType?: undefined;
}
export interface IWFEDBFilesHistory extends IWFEDBFiles {
}
import { CollectionName, IndexDefinitions } from "../../../runtime/infrastructure/mongo/IDataStoreManager";
export declare const collIndexDict: Partial<Record<CollectionName, IndexDefinitions<any> | undefined>>;
//# sourceMappingURL=IWFEDB.d.ts.map