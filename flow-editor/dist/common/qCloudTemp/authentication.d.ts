import { IOrganization } from "./membership";
import { IOrganizationGroup } from "./quickCloud";
export interface IUserMainInfo {
    email: string;
    name?: string;
    lastName?: string;
    role?: string;
}
export interface IUser_SUSI {
    id: string;
    objectId: string;
    email: IUserMainInfo["email"];
    name?: IUserMainInfo["name"];
    lastName?: IUserMainInfo["lastName"];
    role?: IUserMainInfo["role"];
    organizationIds: Array<IOrganization["id"]>;
    organizationGroupIds?: Array<IOrganizationGroup["ID"]>;
    limits?: {
        createOrg?: number;
    };
    createDate: Date;
    userRoleIds?: Array<string>;
    activity?: number;
    lastSignIn?: Date;
    standAloneInfo?: IUserStandAloneInfo;
    mobileUsage?: IUserMobileUsage;
}
export interface IUser_SUSIExtended extends IUser_SUSI {
    organizationNames?: Array<string>;
    organizationGroupNames?: Array<string>;
    licensed?: 'LICENSED' | 'Demo User' | 'Free';
}
export interface IInvitation {
    id: string;
    email?: string;
    userId?: string;
    organizationId: IOrganization["id"];
    inviterUserId: IUser_SUSI["id"];
    expireDate: Date;
    createDate: Date;
}
export interface IUserStandAloneInfo {
    orgGroup: string;
    appName: string;
    shellInfo: string;
    reason: string;
    lastOpenedDate?: Date;
}
export interface IUserMobileUsage {
    isMobileTemplateUsed?: boolean;
    isMobilePublished?: boolean;
}
//# sourceMappingURL=authentication.d.ts.map