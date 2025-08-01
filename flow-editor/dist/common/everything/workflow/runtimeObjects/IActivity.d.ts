import { ActionType, CustomType, DateTime } from "../runtimemodels/types";
import { IUser } from "../runtimeObjects/namedobjects/IUser";
export interface IActivity {
    taskDefinitionKey: string;
    taskName: string;
    taskLabel: string;
    uniqueKeys?: Array<string>;
    taskId?: string;
    actionLabel?: string;
    actionType?: ActionType | 'addActivity';
    customType?: CustomType;
    completed: boolean;
    user: IUser;
    assignedUserId?: string;
    assignedSwimlaneId?: string;
    timeStamp: DateTime;
    slaDueGoal?: DateTime;
    slaDueDeadline?: DateTime;
    slaDueCritical?: DateTime;
    descriptionCode?: string;
    description?: string;
    error?: string;
    status?: string;
    statusDescription?: string;
    previousStatus?: string;
}
//# sourceMappingURL=IActivity.d.ts.map