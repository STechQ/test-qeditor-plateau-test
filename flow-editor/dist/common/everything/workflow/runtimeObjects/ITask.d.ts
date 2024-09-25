import { StatusType } from "../runtimemodels/IWorkflow";
import { DateTime } from "../runtimemodels/types";
import { IAction } from "./IAction";
import { INamedObjectBase } from "./namedobjects/INamedObjectBase";
import { ISLA } from "./namedobjects/ISLA";
export interface ITask extends INamedObjectBase {
    taskId: string;
    taskDefinitionKey: string;
    taskName: string;
    taskLabel: string;
    status: StatusType;
    statusDescription: string;
    taskGroupId: string;
    userId?: string;
    userName?: string;
    unitId?: string;
    swimlane: string;
    taskStart: DateTime;
    taskEnd: DateTime;
    sla: ISLA;
    priority?: number;
    actions?: Array<IAction>;
    candidateUnits?: Array<string>;
    candidateUsers?: Array<string>;
}
//# sourceMappingURL=ITask.d.ts.map