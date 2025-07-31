import { IUser } from "./namedobjects/IUser";
import { IProcessInstance } from "./namedobjects/IProcessInstance";
import { IEnumModel } from "../../enum/runtimeModels/IEnumModel";
import { DataInstance } from "./DataInstance.js";
import { IActionData } from "./IAction";
export interface IWorkflowContext {
    currentUser?: IUser;
    enums?: Array<IEnumModel>;
    dataInstance?: DataInstance;
    processInstance?: IProcessInstance;
    action?: IActionData;
}
//# sourceMappingURL=IWorkflowContext.d.ts.map