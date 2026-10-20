import { ISLA } from "../ISLA";
import { IForm, StatusType } from "../IWorkflow";
import { IActionReference } from "../../runtimeObjects/IActionReference";
import { IExpressionData, IExpressionDataTypeSelection, IPropObject } from "@stechquick/flow-interfaces/runtime";
export interface ISwimlaneExpressionData {
    type: IExpressionDataTypeSelection<"swimlane" | "context" | "literal">;
    value: string;
}
export type IHumanTaskPropType = IPropObject & {
    procesStatus: StatusType;
    procesStatusLiteral?: string;
    taskStatus?: StatusType;
    form: IForm;
    actions: Record<number, IActionReference>;
    /** Open and lock the next accessible task after completion. Defaults to true for existing models. */
    autoOpenNextTask?: boolean;
    sendTo?: "swimlane" | "user";
    stepIdToShow?: string;
    user?: IExpressionData;
    swimlane?: ISwimlaneExpressionData;
    priority?: number;
    sla?: ISLA;
};
//# sourceMappingURL=IHumanTaskPropType.d.ts.map