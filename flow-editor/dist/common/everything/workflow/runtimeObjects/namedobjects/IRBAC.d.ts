import { PermissionKeys } from "../../../accessmanager/AccessManagerTypes";
export interface IRBAC {
    id: string;
    permissions: {
        [K in PermissionKeys]?: boolean;
    };
}
//# sourceMappingURL=IRBAC.d.ts.map