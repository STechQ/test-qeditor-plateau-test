import { IRBAC } from "./IRBAC";
import { IRuntimePrivilege } from "./IRuntimePrivilege";
export interface IRuntimeRole {
    readonly id: string;
    readonly rbacSet: ReadonlyArray<IRBAC>;
    readonly privilegeSet: ReadonlyArray<IRuntimePrivilege>;
    description?: string;
}
export type RuntimeRoleInput = string | {
    id: string;
    description?: string;
    rbacSet?: ReadonlyArray<RuntimeRbacInput>;
    privilegeSet?: ReadonlyArray<RuntimePrivilegeInput>;
};
export type RuntimePrivilegeInput = string | IRuntimePrivilege;
export type RuntimeRbacInput = string | ({
    id: string;
} & Partial<Pick<IRBAC, "permissions">>);
/** Methods available on roles returned by accessmanager.getPersona (not serialized user data). */
export interface IEditableRuntimeRole extends IRuntimeRole {
    addPrivilege(privilege: RuntimePrivilegeInput): this;
    /** Remove a runtime privilege, including inherited values. Unknown IDs are a no-op. */
    removePrivilege(privilege: RuntimePrivilegeInput): this;
    addRbac(rbac: RuntimeRbacInput): this;
    /** Remove the runtime RBAC record (and its restriction), not replace it with a denial. */
    removeRbac(rbac: RuntimeRbacInput): this;
}
//# sourceMappingURL=IRuntimeRole.d.ts.map