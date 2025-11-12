import { EnvManager } from "../../../runtime/application/envManager";
import { IExecutionContextStore } from "../../../runtime/infrastructure/executionContext";
import { MongoDBManager } from "../../../runtime/infrastructure/mongo/mongoDBManager";
import { IDataTypeModel } from "../../dataType/runtimemodels/IDataTypeModel";
import { ILegacyWorkflowModelForCamunda, IWorkflowModel, StatusType } from "../runtimemodels/IWorkflow";
import { DataInstance } from "./DataInstance";
import { IActionData } from "./IAction";
import { IContext } from "./IContext";
import { IContextInfo } from "./IContextInfo";
import { IWMEnvKeyMap } from "./IWMEnvKeyMap";
import { IWorkflowIncomingRequest } from "./IWorkflowIncomingRequest";
import { IProcessInstance } from "./namedobjects/IProcessInstance";
import { IUser } from "./namedobjects/IUser";
import { IStepStates } from "../../flow/runtimeObjects/IStepStates";
import { IMongoDBTransactionQueue } from "../../../runtime/infrastructure/mongo/IDataStoreManager";
import { ILockParam } from "./ILock";
import { IWFEDBTaskHistory } from "./IWFEDB";
export interface IWorkflowExecutionContextStore extends IExecutionContextStore {
    workflowIncomingRequest?: IWorkflowIncomingRequest;
    processInstanceId?: string;
    workflowModel?: ILegacyWorkflowModelForCamunda;
    dataInstanceModel?: IDataTypeModel;
    dsManager?: MongoDBManager;
    processId?: string;
    businessKey?: string;
    taskId?: string;
    appId?: string;
    user?: IUser;
    initialContext?: IContext;
    envManager: EnvManager<IWMEnvKeyMap>;
    trxQueue?: IMongoDBTransactionQueue;
    wfEngineOnUs?: {
        workflowModel?: IWorkflowModel;
        dataInstance?: DataInstance;
        processInstance?: IProcessInstance;
        stepStates?: IStepStates;
        wfInput: Record<string, any> | undefined;
        lastAction?: IActionData;
        infoList?: Array<IContextInfo>;
        flowThreadId?: string;
        lockMap?: Record<string, ILockParam>;
        lastCompletedTask?: IWFEDBTaskHistory;
        jumpToStepId?: string;
        jumpToStepName?: string;
        status?: StatusType;
    };
}
//# sourceMappingURL=IWorkflowExecutionContextStore.d.ts.map