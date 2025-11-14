/// <reference types="node" />
import { IAddActivityProp, ICounterPropType, StepFlowModelPropType } from "../../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { IWorkflowContext } from "../../../../../common/everything/workflow/runtimeObjects/IWorkflowContext";
import { IWorkflowIncomingRequest } from "../../../../../common/everything/workflow/runtimeObjects/IWorkflowIncomingRequest";
import { IMongoDBTransactionQueue } from "../../../../../common/runtime/infrastructure/mongo/IDataStoreManager";
import { MongoDBManager } from "../../../../../common/runtime/infrastructure/mongo/mongoDBManager";
import { DataInstance } from "../../../../../common/everything/workflow/runtimeObjects/DataInstance";
import { IContext } from "../../../../../common/everything/workflow/runtimeObjects/IContext";
import { IDataSearchParams, IDataSearchResult } from "../../../../../process/workflowManager/helpers/DataSearchEngine.js";
import { CustomType } from "../../../../../common/everything/workflow/runtimemodels/types";
import { IFile } from "../../../../../common/everything/workflow/runtimeObjects/namedobjects/IFile";
import { IActionData } from "../../../../../common/everything/workflow/runtimeObjects/IAction";
export interface IPlatformWFFAdaptor {
    flowExecutor: (prop: StepFlowModelPropType) => Promise<any>;
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
            dsManager: MongoDBManager;
        }>;
        getTransactionQueue: () => Promise<{
            trxQueue: IMongoDBTransactionQueue | undefined;
        }>;
    };
    wfe: {
        processContext: {
            retrieveContext: (prop: string) => Promise<IContext>;
            commit: (prop: IResumeProcessRequest) => Promise<boolean>;
            complete: (prop: IResumeProcessRequest) => Promise<boolean>;
        };
        dataSearch: {
            searchQuery: (prop: IDataSearchParams) => Promise<IDataSearchResponse>;
        };
        file: {
            upload: (fileBody: string | Blob | Uint8Array | Buffer, fileName: string, label: string, action: IActionData) => Promise<IFile>;
            delete: (storageHandle: string, action: IActionData) => Promise<void>;
        };
    };
    log: (message: string, ...optionalParams: Array<any>) => void;
}
export type CompleteActionType = "complete" | "cancel" | "return";
export interface IDataSearchResponse extends IDataSearchResult {
}
export interface IResumeProcessRequest {
    processInstanceId: string;
    taskId: string;
    dataInstance: DataInstance;
    actionType?: CompleteActionType;
    customType?: CustomType;
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