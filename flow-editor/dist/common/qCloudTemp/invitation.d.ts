import { IUser_SUSI } from "./authentication";
import { IOrganization } from "./membership";
export interface IInvitation extends IInvitationBase {
    id: string;
    organizationId: IOrganization["id"];
    inviterUserId: IUser_SUSI["id"];
    expireDate: Date;
    createDate: Date;
}
export interface IInvitationBase {
    email?: string;
    userId?: string;
}
//# sourceMappingURL=invitation.d.ts.map