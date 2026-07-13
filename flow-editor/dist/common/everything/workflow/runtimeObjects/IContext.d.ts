import { DataInstance } from "./DataInstance";
import { IActionData } from "./IAction";
import { IProcessInstance } from "./namedobjects/IProcessInstance";
import { IUser } from "./namedobjects/IUser";
import { IContextInfo } from "./IContextInfo";
export declare const DefaultInfoSuccessCode = "100";
export interface IContext {
    currentUser?: IUser;
    dataInstance: DataInstance;
    action?: IActionData;
    processInstance: IProcessInstance;
    infoList?: Array<IContextInfo>;
}
//# sourceMappingURL=IContext.d.ts.map