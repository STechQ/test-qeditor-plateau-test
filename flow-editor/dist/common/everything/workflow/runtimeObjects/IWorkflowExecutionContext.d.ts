import { ExecutionContext } from "../../../runtime/infrastructure/executionContext";
import { IWorkflowExecutionContextStore } from "./IWorkflowExecutionContextStore";
export interface IWorkflowExecutionContext extends ExecutionContext<IWorkflowExecutionContextStore> {
    getWfeOnUsProcessInstance(): {
        processInstance: NonNullable<NonNullable<IWorkflowExecutionContextStore["wfEngineOnUs"]>["processInstance"]>;
        dataInstance: NonNullable<NonNullable<IWorkflowExecutionContextStore["wfEngineOnUs"]>["dataInstance"]>;
        businessKey: NonNullable<IWorkflowExecutionContextStore["businessKey"]>;
        wfInput: NonNullable<IWorkflowExecutionContextStore["wfEngineOnUs"]>["wfInput"];
    };
    getWfeOnUs(): {
        wfEngineOnUs: NonNullable<IWorkflowExecutionContextStore["wfEngineOnUs"]>;
        appId: NonNullable<IWorkflowExecutionContextStore["appId"]>;
        processId: NonNullable<IWorkflowExecutionContextStore["processId"]>;
        user: NonNullable<IWorkflowExecutionContextStore["user"]>;
        userId: NonNullable<IWorkflowExecutionContextStore["userId"]>;
        workflowModel: NonNullable<NonNullable<IWorkflowExecutionContextStore["wfEngineOnUs"]>["workflowModel"]>;
    };
}
//# sourceMappingURL=IWorkflowExecutionContext.d.ts.map