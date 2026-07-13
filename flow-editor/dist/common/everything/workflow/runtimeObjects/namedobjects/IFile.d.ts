/// <reference types="node" />
import { DateTime } from "../../runtimemodels/types";
import { INamedObjectBase } from "./INamedObjectBase";
import { IRuntimeUser } from "./IRuntimeUser";
export interface IFile extends INamedObjectBase {
    id: string;
    user: IRuntimeUser;
    label?: string;
    fileName?: string;
    storageHandle?: string;
    fileType?: "file";
    created?: DateTime;
    body?: string | Buffer;
}
//# sourceMappingURL=IFile.d.ts.map