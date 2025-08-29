import { ModelType } from "../everything/studio/ui/IStudioUIModelBase";
import { ICloudObject, ObjectID } from "./quickCloud";
export interface IModelVersion {
    modelID: string;
    version: string;
    type: ModelType;
    path: string;
    imported?: boolean | "fromOuterOrg";
}
export interface IApplicationVersionArtifacts {
    modelsOnly?: string;
}
export interface IApplicationVersion extends ICloudObject {
    ID: ObjectID;
    appID: ObjectID;
    models: Array<IModelVersion>;
    version: string;
    createDate: Date;
    createdBy: string;
    updateDate?: Date;
    updatedBy?: string;
    shortComment?: string;
    published?: boolean;
    artifacts?: IApplicationVersionArtifacts;
}
//# sourceMappingURL=applicationVersion.d.ts.map