import { StatusType } from "../runtimemodels/IWorkflow";
import { DateTime } from "../runtimemodels/types";
import { IAction } from "./IAction";
import { INamedObjectBase } from "./namedobjects/INamedObjectBase";
import { ISLA } from "./namedobjects/ISLA";
import { IUnit } from "./namedobjects/IUnit";
export interface ITask extends INamedObjectBase {
    taskId: string;
    taskDefinitionKey: string;
    taskName: string;
    taskLabel: string;
    status: StatusType;
    statusDescription: string;
    userId?: string;
    userName?: string;
    currentUnit?: IUnit;
    swimlane: string;
    taskStart: DateTime;
    taskEnd: DateTime;
    sla: ISLA;
    priority?: number;
    actions?: Array<IAction>;
}
//# sourceMappingURL=ITask.d.ts.map