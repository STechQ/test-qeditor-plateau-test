import { IRBAC } from "./IRBAC";
import { IRuntimePrivilege } from "./IRuntimePrivilege";
export interface IRuntimeRole {
    id: string;
    rbacSet: Array<IRBAC>;
    privilegeSet: Array<IRuntimePrivilege>;
    description?: string;
}
//# sourceMappingURL=IRuntimeRole.d.ts.map