import { IAction } from "./IAction";
import { IInform } from "./INotificationObject";
import { ITask } from "./ITask";
import { IUser } from "./namedobjects/IUser";
export type IFormContextTaskWFE = {
    type: "task";
    taskId: string;
    taskLabel: ITask["taskLabel"];
    statusDescription: ITask["statusDescription"];
    assignee: {
        swimlane: ITask["swimlane"];
    } | {
        user: {
            userId: IUser["userId"];
            fullName: IUser["fullName"];
        };
    };
} & ({
    canAccess: true;
} | {
    canAccess: false;
    reason: string;
});
export interface IFormContextThreadWFE {
    type: "thread";
    threadId: string;
    stepName: string;
    stepLabel: string;
    stepId: string;
    lastUpdate: number;
    status: {
        state: "broken";
        error: string;
    } | {
        state: "ongoing";
    };
}
export declare const studio_preFormTaskID = "studio_preFormTaskID";
export interface IFormContextWFE {
    form: {
        formId: string;
        taskId: string | typeof studio_preFormTaskID;
        readonly?: boolean;
        bussinessErrorCode?: string;
        taskList?: Array<IFormContextTaskWFE | IFormContextThreadWFE>;
        actions?: Array<IAction>;
    };
    currentUser: IUser;
    summary: Array<IInform>;
    swimlanes?: Record<string, string>;
}
export interface IFormContext {
    form: IForm;
    currentUser: IUser;
    task: ITask;
    summary: Array<IInform>;
}
export interface IForm {
    formId: string | undefined;
    readonly: boolean | undefined;
    actionResult?: Record<string, any>;
    originalFormId?: string;
    bussinessErrorCode?: string;
}
//# sourceMappingURL=IFormContext.d.ts.map