import { IUser } from "./namedobjects/IUser";
import { IProcessInstance } from "./namedobjects/IProcessInstance";
import { DataInstance } from "./DataInstance.js";
import { IActionData } from "./IAction";
export interface IWorkflowContext {
    currentUser?: IUser;
    dataInstance?: DataInstance;
    processInstance?: IProcessInstance;
    action?: IActionData;
}
export default interface IWorkflowEnvironment {
    constants: Record<string, any>;
    constantsWId: Record<string, any>;
    constantInfo: Record<string, {
        lastModelUpdate: number;
        lastRefresh?: Date;
    }>;
    environment: string;
    isLocal: boolean;
}
//# sourceMappingURL=IWorkflowContext.d.ts.map