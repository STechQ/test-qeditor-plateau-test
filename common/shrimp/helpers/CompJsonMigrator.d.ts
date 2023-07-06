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
    /**
     * Migrate the old design system to style break point system.
     * Delete O.layout field in compJson
     * @param ctrl Component json
     * @returns void
     */
    static migrateDesignToNewStyleBreakPoint(ctrl: ICompJson): void;
    static convertDesignTimeToStyleBP(designOptions: Array<string>): Record<string, string>;
}
//# sourceMappingURL=CompJsonMigrator.d.ts.map