import { ChangeStream, ChangeStreamDocument, Document } from "mongodb";
import { CollectionName } from "./IDataStoreManager";
import { MongoDBManager } from "./mongoDBManager";
type ChangeStreamRet = ChangeStream<Document, ChangeStreamDocument<Document>> | Array<ChangeStream<Document, ChangeStreamDocument<Document>>>;
export type ChangeStreamFuncMap = Partial<Record<CollectionName, (dbManager: MongoDBManager) => Promise<ChangeStreamRet>>>;
export type ChangeStreamInitMap = Partial<Record<CollectionName, boolean>>;
export declare class ChangeStreamHelper {
    private static changeStreams;
    static initChangeStreams(dbManager: MongoDBManager, initMap: ChangeStreamFuncMap, options?: {
        enabledMap?: ChangeStreamInitMap;
    }): Promise<void>;
    static getStreams(): ChangeStream<Document, ChangeStreamDocument<Document>>[];
    static closeAllStreams(): void;
}
export {};
//# sourceMappingURL=ChangeStreamHelper.d.ts.map