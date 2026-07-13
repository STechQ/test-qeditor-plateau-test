import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
import { PermissionKeys, PermittedTypes } from "../AccessManagerTypes";
import { IPrivilegeItem } from "./IPrivilegeDesign";
export type IRoleDesign = IModelBaseFields & {
    type: "role";
    name: string;
    roles: Array<IRoleItem>;
};
export interface IRoleItem {
    id: string;
    parents?: Array<string>;
    rbacSet: Array<IRBACItem>;
    privilegeSet: Array<IPrivilegeItem['id']>;
    description?: string;
}
export interface IRBACItem {
    refId: string;
    refType: PermittedTypes;
    permissions: {
        [K in PermissionKeys]?: boolean;
    };
}
export interface IRoleWithRef extends IRoleItem {
    refId: string;
}
//# sourceMappingURL=IRoleDesign.d.ts.map