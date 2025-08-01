import { NotificationEventTypes } from "../runtimemodels/types";
import { ITask } from "./ITask";
import { IProcessInstance } from "./namedobjects/IProcessInstance";
export type INotificationObject = {
    eventType: NotificationEventTypes;
    informList: Array<IInform>;
    processInstance: IProcessInstance;
} & ({
    onUs: false;
} | {
    onUs: true;
    task: ITask | undefined;
});
export interface IInform {
    key: string | undefined;
    label: string | undefined;
    header: string;
    display?: boolean;
}
//# sourceMappingURL=INotificationObject.d.ts.map