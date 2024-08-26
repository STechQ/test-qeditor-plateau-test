import { DateTime } from "../../runtimemodels/types";
import { INamedObjectBase } from "./INamedObjectBase";
import { IUser } from "./IUser";
export interface IFile extends INamedObjectBase {
    id: string;
    user?: IUser;
    label?: string;
    storageHandle?: string;
    fileType?: "file";
    created?: DateTime;
    body?: string;
}
//# sourceMappingURL=IFile.d.ts.map