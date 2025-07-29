import { ChangeStream, ChangeStreamDocument, Document } from "mongodb";
import { CollectionName } from "./IDataStoreManager";
import { MongoDBManager } from "./mongoDBManager";
export type ChangeStreamFuncMap = Partial<Record<CollectionName, (dbManager: MongoDBManager) => Promise<ChangeStream>>>;
export declare class ChangeStreamHelper {
    private static changeStreams;
    static initChangeStreams(dbManager: MongoDBManager, initMap: ChangeStreamFuncMap): Promise<void>;
    static getStreams(): ChangeStream<Document, ChangeStreamDocument<Document>>[];
    static closeAllStreams(): void;
}
//# sourceMappingURL=ChangeStreamHelper.d.ts.map