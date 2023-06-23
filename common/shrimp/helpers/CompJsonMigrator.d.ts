import { ICompJson } from "../interfaces/ComponentInterfaces/ICompJson";
import { IDictionary } from "../interfaces/IDictionary";
export interface IFixCtrlNotification {
    message: string;
    type?: "error" | "warn";
}
export declare class CompJsonMigrator {
    static fixCtrlOldStyle(ctrl: ICompJson, options?: {
        mode?: "designtime" | "runtime";
    }): IDictionary<IFixCtrlNotification>;
}
//# sourceMappingURL=CompJsonMigrator.d.ts.map