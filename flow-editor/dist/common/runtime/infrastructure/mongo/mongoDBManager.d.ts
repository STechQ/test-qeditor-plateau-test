import { AggregateType, CollectionName, FilterTypeNullable, FilterTypeOrAnd, GetLastOptions, GetOptions, GetReturnType, IDataStoreManager, IMongoDBTransactionQueue, IndexDefinitions, ListOptions, UpdateResult, UpdateTypeNullable } from "./IDataStoreManager";
import { UpdateFilter, ReturnDocument, ChangeStreamDocument, Document, ChangeStream } from "mongodb";
import { MongoDBTransactionQueue } from "./mongoDBTransactionQueue";
export declare const MongoDBErrorCodes: {
    duplicateKeyErrorCode: number;
    IndexOptionsConflict: number;
    IndexKeySpecsConflict: number;
};
export declare class MongoDBManager implements IDataStoreManager {
    private url;
    private _dbName;
    constructor(conString: string, dbName: string);
    private getClient;
    private getCollection;
    private executeCommand;
    get dbName(): string;
    startTransactionQueue(): MongoDBTransactionQueue;
    List2<T extends object, RetT extends object = T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: ListOptions<RetT> & {
        trxQueue?: TTrx;
    }): Promise<Array<RetT>>;
    List<T, RetT = T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: ListOptions & {
        trxQueue?: TTrx;
    }): Promise<RetT[]>;
    Get2<T, RetT = T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: GetOptions<Array<keyof RetT>> & {
        trxQueue?: TTrx;
    }): Promise<RetT | undefined>;
    Get<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: GetOptions & {
        trxQueue?: TTrx;
    }): Promise<T | undefined>;
    GetAndUpdate<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, updateValue: UpdateTypeNullable<T>, options?: {
        returnDocument?: ReturnDocument;
        upsert?: boolean;
        trxQueue?: TTrx;
    }): Promise<T | undefined>;
    GetDistinct<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, key: string, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: {
        trxQueue?: TTrx;
    }): Promise<T | undefined>;
    GetLast<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, options: GetLastOptions & {
        trxQueue?: TTrx;
    }): Promise<T>;
    Insert<T extends object, RetT = T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, item: T, options: {
        trxQueue?: TTrx;
    }): Promise<GetReturnType<TTrx, RetT>>;
    InsertMany<T extends object, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, items: Array<T>, options: {
        trxQueue?: TTrx;
    }): Promise<void>;
    UpdateMany<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, updateValue: UpdateTypeNullable<T>, options?: {
        upsert: boolean;
        trxQueue?: TTrx;
        ignoreUndefined?: boolean;
    }): Promise<GetReturnType<TTrx, UpdateResult>>;
    Update<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, updateValue: UpdateTypeNullable<T>, options?: {
        trxQueue?: TTrx;
        ignoreUndefined?: boolean;
    } & ({
        upsert: true;
        setOnInsert?: UpdateTypeNullable<T>;
    } | {
        upsert?: false;
    })): Promise<GetReturnType<TTrx, UpdateResult>>;
    UpdateManyRaw<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, update: UpdateFilter<Document>, options?: {
        upsert: boolean;
        trxQueue?: TTrx;
        ignoreUndefined?: boolean;
    }): Promise<GetReturnType<TTrx, UpdateResult>>;
    UpdateAsNative<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, update: UpdateFilter<T> | Partial<T>, options?: {
        trxQueue?: TTrx;
        upsert?: boolean;
    }): Promise<GetReturnType<TTrx, UpdateResult>>;
    GetAndUpdateNative<T = Document, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, update: UpdateFilter<any>, options?: {
        trxQueue?: TTrx;
        upsert?: boolean;
        returnDocument?: ReturnDocument;
    }): Promise<T | undefined>;
    Delete<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options: {
        trxQueue?: TTrx;
    }): Promise<GetReturnType<TTrx, number>>;
    DeleteOne<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: {
        trxQueue?: TTrx;
    }): Promise<GetReturnType<TTrx, number>>;
    Count<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: {
        trxQueue?: TTrx;
    }): Promise<number>;
    Aggregate<T, RetT = T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, pipeline: Array<AggregateType<T>>, options?: {
        trxQueue?: TTrx;
    }): Promise<Array<RetT>>;
    CreateIndexes<T>(collectionName: CollectionName, indexDefinitions: IndexDefinitions<T>, options?: {
        force?: boolean;
    }): Promise<void>;
    changeStream<T extends Document>(collectionName: CollectionName, cb: (result: ChangeStreamResult<T>) => Promise<void>, options?: {
        fullDocument?: boolean;
    }): Promise<ChangeStream<T, ChangeStreamDocument<T>>>;
    getAllCollections(): Promise<CollectionName[]>;
}
export interface ChangeStreamResult<T extends Document> {
    operationType: "insert" | "update";
    fullDocument?: T;
    updateDescription?: {
        updatedFields?: Partial<T>;
        removedFields?: Array<string>;
    };
}
//# sourceMappingURL=mongoDBManager.d.ts.map