import { IAddActivityProp, ICounterPropType, StepFlowModelPropType } from "../../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { IWorkflowContext } from "../../../../../common/everything/workflow/runtimeObjects/IWorkflowContext";
import { IWorkflowIncomingRequest } from "../../../../../common/everything/workflow/runtimeObjects/IWorkflowIncomingRequest";
import { IMongoDBTransactionQueue } from "../../../../../common/runtime/infrastructure/mongo/IDataStoreManager";
import { MongoDBManager } from "../../../../../common/runtime/infrastructure/mongo/mongoDBManager";
import { IRestServiceCallPropType } from "../../../flowComponents/runtime/restServiceCall";
import { DataInstance } from "../../../../../common/everything/workflow/runtimeObjects/DataInstance";
import { IContext } from "../../../../../common/everything/workflow/runtimeObjects/IContext";
export interface IPlatformWFFAdaptor {
    flowExecutor: (prop: StepFlowModelPropType) => Promise<any>;
    restServiceExecutor: (prop: IRestServiceCallPropType) => Promise<any>;
    soapServiceExecutor: (prop: StepFlowModelPropType) => Promise<any>;
    keyExecutor: (prop: ICounterPropType) => Promise<any>;
    workflowDb: () => {
        permanentStore: {
            get: (key: string) => Promise<any>;
            set: (key: string, value: any) => Promise<any>;
        };
    };
    context: () => IWorkflowContext | undefined;
    getIncomingRequest: () => IWorkflowIncomingRequest;
    getObjectbyCache: <T>(key: String) => Promise<T | undefined>;
    constantsWId: Record<string, any>;
    userId: string | undefined;
    addActivity: (prop: IAddActivityProp) => Promise<void>;
    getConstant: (constantId: string) => Promise<string | undefined>;
    privateOps: {
        getDb: () => Promise<{
            trxQueue: IMongoDBTransactionQueue | undefined;
            dsManager: MongoDBManager;
        }>;
    };
    wfe: {
        processContext: {
            retrieveContext: (prop: string) => Promise<IContext>;
            commit: (prop: IResumeProcessRequest) => Promise<boolean>;
            complete: (prop: IResumeProcessRequest) => Promise<boolean>;
        };
    };
}
export interface IResumeProcessRequest {
    processInstanId: string;
    taskId: string;
    dataInstance: DataInstance;
}
export interface IPlatformWorkflowServerResponse {
    status: number;
    headers: Record<string, string>;
    data: any;
}
export interface IPlatformWorkflowServerRequest {
    method: "GET" | "POST";
    url: string;
    headers?: Record<string, string>;
    body?: any;
}
//# sourceMappingURL=IPlatformWorkflowAdaptor.d.ts.map