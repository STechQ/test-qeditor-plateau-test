import { PermissionKeys } from "../../../accessmanager/AccessManagerTypes";
export interface IRBAC {
    readonly id: string;
    readonly permissions: {
        readonly [K in PermissionKeys]?: boolean;
    };
}
//# sourceMappingURL=IRBAC.d.ts.map