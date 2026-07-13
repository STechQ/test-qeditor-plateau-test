import { CollectionName } from "./IDataStoreManager";
import { IManagedChangeStream, MongoDBManager } from "./mongoDBManager";
type ChangeStreamRet = IManagedChangeStream | Array<IManagedChangeStream>;
export type ChangeStreamFuncMap = Partial<Record<CollectionName, (dbManager: MongoDBManager) => Promise<ChangeStreamRet>>>;
export type ChangeStreamInitMap = Partial<Record<CollectionName, boolean>>;
export declare class ChangeStreamHelper {
    private static changeStreams;
    static initChangeStreams(dbManager: MongoDBManager, initMap: ChangeStreamFuncMap, options?: {
        enabledMap?: ChangeStreamInitMap;
    }): Promise<void>;
    static getStreams(): IManagedChangeStream[];
    static closeAllStreams(): void;
}
export {};
//# sourceMappingURL=ChangeStreamHelper.d.ts.map