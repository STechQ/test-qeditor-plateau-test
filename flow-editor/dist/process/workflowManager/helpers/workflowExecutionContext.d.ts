import { IWorkflowExecutionContextStore } from "../../../common/everything/workflow/runtimeObjects/IWorkflowExecutionContextStore";
import { ExecutionContext } from "../../../common/runtime/infrastructure/executionContext";
import { IWorkflowExecutionContext } from "../../../common/everything/workflow/runtimeObjects/IWorkflowExecutionContext";
import { CollectionName } from "../../../common/runtime/infrastructure/mongo/IDataStoreManager";
import { IWorkflowContext } from "../../../common/everything/workflow/runtimeObjects/IWorkflowContext";
export declare class WorkflowExecutionContext extends ExecutionContext<IWorkflowExecutionContextStore> implements IWorkflowExecutionContext {
    static init(): void;
    static get current(): WorkflowExecutionContext;
    private static _current;
    static get currentStore(): IWorkflowExecutionContextStore;
    protected createNewStoreForChildren(): IWorkflowExecutionContextStore;
    collectionOverride(collectionName: CollectionName): Promise<CollectionName>;
    getWfeOnUsProcessInstance(): {
        processInstance: import("../../../common/everything/workflow/runtimeObjects/namedobjects/IProcessInstance").IProcessInstance;
        dataInstance: import("../../../common/everything/workflow/runtimeObjects/DataInstance").DataInstance;
        businessKey: string;
        wfInput: Record<string, any> | undefined;
    };
    getWfeOnUs(): {
        wfEngineOnUs: {
            workflowModel?: import("../../../common/everything/workflow/runtimemodels/IWorkflow").IWorkflowModel | undefined;
            dataInstance?: import("../../../common/everything/workflow/runtimeObjects/DataInstance").DataInstance | undefined;
            processInstance?: import("../../../common/everything/workflow/runtimeObjects/namedobjects/IProcessInstance").IProcessInstance | undefined;
            stepStates?: import("../../../common/everything/flow/runtimeObjects/IStepStates").IStepStates | undefined;
            wfInput: Record<string, any> | undefined;
            lastAction?: import("../../../common/everything/workflow/runtimeObjects/IAction").IActionData | undefined;
            infoList?: import("../../../common/everything/workflow/runtimeObjects/IContextInfo").IContextInfo[] | undefined;
            flowThreadId?: string | undefined;
            lockMap?: Record<string, import("../../../common/everything/workflow/runtimeObjects/ILock").ILockParam> | undefined;
            lastCompletedTask?: import("../../../common/everything/workflow/runtimeObjects/IWFEDB").IWFEDBTaskHistory | undefined;
            jumpToStepId?: string | undefined;
            jumpToStepName?: string | undefined;
            status?: import("../../../common/everything/workflow/runtimemodels/IWorkflow").StatusType | undefined;
        };
        appId: string;
        processId: string;
        user: import("../../../common/everything/workflow/runtimeObjects/namedobjects/IUser").IUser;
        userId: string;
        workflowModel: import("../../../common/everything/workflow/runtimemodels/IWorkflow").IWorkflowModel;
    };
    getWffContext(): IWorkflowContext;
    getWffContextNoProcessInstance(): IWorkflowContext;
    createNewWfEngineOnUs(): NonNullable<IWorkflowExecutionContextStore["wfEngineOnUs"]>;
    getExecutionAdditionalLog(): string;
}
//# sourceMappingURL=workflowExecutionContext.d.ts.map