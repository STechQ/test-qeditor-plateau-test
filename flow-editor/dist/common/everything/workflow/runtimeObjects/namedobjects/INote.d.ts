import { DateTime } from "../../runtimemodels/types";
import { IUser } from "./IUser";
export interface INote {
    id: string;
    created: DateTime;
    updated: DateTime;
    user: IUser;
    note: string;
}
//# sourceMappingURL=INote.d.ts.map