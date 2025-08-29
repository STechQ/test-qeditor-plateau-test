import { IStudioUIObjectBase } from "../../../../common/everything/studio/ui/IStudioUIObjectBase";
export interface IObject extends IStudioUIObjectBase {
    objectType: "application" | "model" | "module";
    synced: boolean;
    createdBy?: string;
    createDate?: Date;
    updateDate?: Date;
    updatedBy?: string;
}
export interface IStoreInfo {
    storeID: string;
    useDate: Date;
}
export interface ICloudObject {
    ID: string;
    name: string;
    ownerUser: string;
    createDate: Date;
    createdBy: string;
    updateDate?: Date;
    updatedBy?: string;
    storeInfo?: IStoreInfo;
    isPermanent?: boolean;
    priority?: number;
}
//# sourceMappingURL=IObject.d.ts.map