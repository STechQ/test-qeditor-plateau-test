import { IContext } from "../../../../common/everything/workflow/runtimeObjects/IContext";
import { IFormContext, IFormContextWFE } from "../../../../common/everything/workflow/runtimeObjects/IFormContext";
import { ActionType, CustomType } from "../../../../common/everything/workflow/runtimemodels/types";
export interface ISessionRequest {
    processId: string;
    context: IContext;
    processInstanceId?: string;
    taskId?: string;
    businessKey?: string;
    actionType: ActionType;
    customType?: CustomType;
    input?: Record<string, any>;
    output?: Record<string, any>;
    relevantUserId?: string;
    updatedNoteId?: string;
    appId?: string;
}
export interface ISessionResponse {
    context: IContext;
    formContext: IFormContext;
    input: Record<string, any>;
    output: Record<string, any>;
}
export interface ISessionResponseWFE {
    context: IContext;
    formContext: IFormContextWFE | undefined;
}
//# sourceMappingURL=session.d.ts.map