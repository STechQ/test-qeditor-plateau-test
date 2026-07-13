import { ActionType, DateTime } from "../runtimemodels/types";
import { IRuntimeUser } from "../runtimeObjects/namedobjects/IRuntimeUser";
export interface IActivity {
    taskDefinitionKey: string;
    taskName: string;
    taskLabel: string;
    uniqueKeys?: Array<string>;
    taskId?: string;
    actionLabel?: string;
    actionType?: ActionType | 'addActivity';
    completed: boolean;
    user: IRuntimeUser;
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