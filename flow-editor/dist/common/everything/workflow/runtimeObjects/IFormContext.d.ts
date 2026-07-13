import { IInform } from "./INotificationObject";
import { ITask } from "./ITask";
import { IRuntimeSwimlane } from "./namedobjects/IRuntimeSwimlane";
import { IRuntimeUser } from "./namedobjects/IRuntimeUser";
/**
 * UI'a dönen form context için action shape'i. `actionId` action modelinin içindeki
 * basicId'dir (action model design'da `IActionItem.id`);
 * appId-isolated action catalog üzerinden bu basicId ile bulunup resolve edilir.
 */
export interface IFormAction {
    actionId: string;
    label: string;
    designId?: string;
}
export type IFormContextTaskWFE = {
    type: "task";
    taskId: string;
    taskLabel: ITask["taskLabel"];
    statusDescription: ITask["statusDescription"];
    assignee: {
        swimlane: ITask["swimlane"];
    } | {
        user: {
            userId: IRuntimeUser["userId"];
            fullName: IRuntimeUser["fullName"];
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
        actions?: Array<IFormAction>;
    };
    currentUser: IRuntimeUser;
    summary: Array<IInform>;
    swimlanes?: Array<IRuntimeSwimlane>;
}
export interface IFormContext {
    form: IForm;
    currentUser: IRuntimeUser;
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