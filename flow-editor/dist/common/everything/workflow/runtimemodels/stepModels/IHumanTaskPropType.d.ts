import { ISLA } from "../ISLA";
import { IForm, StatusType } from "../IWorkflow";
import { IAction } from "../../runtimeObjects/IAction";
import { IPropObject } from "@stechquick/flow-interfaces/runtime";
export type IHumanTaskPropType = IPropObject & {
    procesStatus: StatusType;
    taskStatus?: StatusType;
    forms: Array<IForm>;
    actions: Array<IAction>;
    sendTo?: "swimlane" | "user";
    user?: string;
    swimlane?: string;
    priority?: number;
    sla?: ISLA;
};
//# sourceMappingURL=IHumanTaskPropType.d.ts.map