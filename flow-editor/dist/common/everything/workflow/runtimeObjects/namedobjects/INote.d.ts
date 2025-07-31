import { INamedObjectBase } from "./INamedObjectBase";
import { DateTime } from "../../runtimemodels/types";
import { IUser } from "./IUser";
export interface INote extends INamedObjectBase {
    id: string;
    created: DateTime;
    updated: DateTime;
    user: IUser;
    label: string;
    note: string;
}
//# sourceMappingURL=INote.d.ts.map