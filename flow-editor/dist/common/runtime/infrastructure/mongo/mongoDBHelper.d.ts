import { IEnvKeyMap } from "../../../everything/workflow/runtimeObjects/IEnvKeyMap";
import { EnvManager } from "../../application/envManager";
import { IDataStoreManager, SortObject } from "./IDataStoreManager";
import { MongoDBManager } from "./mongoDBManager.js";
export declare class MongoDBSortHelper {
    convertToSortedTuple(items: Array<SortObject>): Array<[sortField: string, direction: 1 | -1]>;
}
export declare class MongoDBHelper {
    static createClient(envManager: EnvManager<IEnvKeyMap>, dbName: string): MongoDBManager;
    static startupIndexCreator(dsManager: IDataStoreManager, options: {
        pidSeperated: false;
    } | {
        pidSeperated: true;
        processId: string;
    }): Promise<void>;
}
//# sourceMappingURL=mongoDBHelper.d.ts.map