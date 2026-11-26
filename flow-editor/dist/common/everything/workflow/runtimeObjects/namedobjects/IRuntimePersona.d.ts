import { IRuntimeSwimlane } from "./IRuntimeSwimlane";
import { IRuntimeRole, IEditableRuntimeRole, RuntimeRoleInput } from "./IRuntimeRole";
export interface IRuntimePersona {
    readonly name: string;
    application?: Array<{
        id: string;
        name: string;
    }>;
    dashboard?: Array<{
        id: string;
        name: string;
    }>;
    readonly roles: ReadonlyArray<IRuntimeRole>;
    readonly swimlanes: ReadonlyArray<IRuntimeSwimlane>;
}
export type RuntimeSwimlaneInput = string | {
    id: string;
};
/** Editable API is separate from the plain persona stored in user/session payloads. */
export interface IEditableRuntimePersona extends IRuntimePersona {
    readonly roles: ReadonlyArray<IEditableRuntimeRole>;
    addRole(role: RuntimeRoleInput): this;
    /** Remove a role by its runtime ID; retain shared and explicitly added swimlanes. */
    removeRole(role: string | {
        id: string;
    }): this;
    addSwimlane(swimlane: RuntimeSwimlaneInput): this;
    /** Explicitly exclude a swimlane, even when roles grant it; addSwimlane restores it. */
    removeSwimlane(swimlane: RuntimeSwimlaneInput): this;
}
//# sourceMappingURL=IRuntimePersona.d.ts.map