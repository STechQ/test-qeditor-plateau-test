import { DateTime } from "../../runtimemodels/types";
import { IRuntimeUser } from "./IRuntimeUser";
export interface INote {
    id: string;
    created: DateTime;
    updated: DateTime;
    user: IRuntimeUser;
    note: string;
}
//# sourceMappingURL=INote.d.ts.map