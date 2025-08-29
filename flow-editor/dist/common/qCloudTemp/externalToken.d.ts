import { ObjectID } from "./quickCloud";
export interface IExternalToken {
    ID: ObjectID;
    appID: ObjectID;
    createDate: Date;
    createdBy: string;
    token: string;
    status: 'sharing' | "paired" | "deactivated";
    shareTokenValidity?: Date;
    published?: boolean;
    updatedDate?: Date;
    updatedBy?: string;
}
//# sourceMappingURL=externalToken.d.ts.map