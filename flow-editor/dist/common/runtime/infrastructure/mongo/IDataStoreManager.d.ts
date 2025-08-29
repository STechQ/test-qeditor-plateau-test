import { Hook } from "@stechquick/algae/lib/helpers/hook";
import { UpdateFilter, ClientSession } from "mongodb";
import { AtLeastOne } from "../../../../common/helpers/typeHelper";
export type CollectionName = "FM_Users" | "Notifies" | "FM_Models" | "Counters" | "DeploymentLogs" | "PermanentStore" | "ServiceCaches" | "BatchJobs" | "Locks" | "CacheInvalidations" | "JobExecution" | "Holidays" | "JobExecutionHistory" | "WFE_SlaExecution" | "WFE_SlaExecutionHistory" | "WFE_ProcessInst" | "WFE_ProcessInstHistory" | "WFE_Task" | "WFE_TaskHistory" | "WFE_Activity" | "WFE_ActivityHistory" | "WFE_ThreadState" | "WFE_ThreadStateHistory" | "WFE_Notes" | "WFE_NotesHistory" | "WFE_Files" | "WFE_FilesHistory";
export type IndexDefinition<T> = {
    name: string;
    keys: AtLeastOne<Record<keyof T, "asc" | "desc">>;
    unique?: boolean;
    ttl?: number;
    partial?: FilterTypeNullable<T> | FilterTypeOrAnd<T> | undefined;
};
export type IndexDefinitions<T> = Array<IndexDefinition<T>>;
export declare const pidSeperatedCollDict: Record<CollectionName, boolean | undefined>;
export type RawUpdateTypeNullable<T> = {
    $inc?: UpdateTypeNullable<T>;
    $set?: UpdateTypeNullable<T>;
};
export type UpdateTypeNullable<T> = {
    [K in keyof T]?: T[K];
};
export type FilterElemMatch<T> = T extends (Array<any> | undefined) ? {
    $elemMatch?: T extends Array<any> ? FilterTypeNullable<T[number]> : undefined;
} : never;
export type FilterTypeNullable<T> = {
    [K in keyof T]?: T[K] | {
        $in?: Array<T[K]> | T[K];
        $ne?: T[K];
        $gt?: T[K];
        $gte?: T[K];
        $lt?: T[K];
        $lte?: T[K];
        $regex?: RegExp;
        $type?: "string" | "array" | "number" | "bool";
        $exists?: boolean;
    } | FilterElemMatch<T[K]>;
};
export type FilterTypeOrAnd<T> = {
    $or?: Array<FilterTypeNullable<T>>;
    $and?: Array<FilterTypeNullable<T>>;
};
type ModifyType<T, TValue> = {
    [K in keyof T]?: TValue;
};
type DolaredFields<T> = `$${string & keyof T}`;
type FunctionType<T> = {
    body: Function;
    args: Array<DolaredFields<T>>;
    lang: "js";
};
export type ExpressionType<T> = {
    $split?: [DolaredFields<T>, string];
    $add?: Array<ExpressionType<T>>;
    $multiply?: Array<ExpressionType<T>>;
    $toDecimal?: ExpressionType<T>;
    $arrayElemAt?: [string, number];
    $substr?: [DolaredFields<T>, number, number];
    $concat?: Array<string | ExpressionType<T>>;
} | number;
type LetType<T> = {
    vars: {
        [K: string]: ExpressionType<T>;
    };
    in: ExpressionType<T>;
};
type AddFieldType<T> = {
    [K: string]: {
        $function?: FunctionType<T>;
        $let: LetType<T>;
    };
};
type GroupFieldType<T> = {
    _id: DolaredFields<T>;
    [K: string]: {
        $sum?: number;
        $avg?: number;
        $min?: number;
        $max?: number;
        $push?: any;
        $addToSet?: any;
        $first?: any;
        $last?: any;
    } | string;
};
type LookupType = {
    from: string;
    localField?: string;
    foreignField?: string;
    let?: Record<string, any>;
    pipeline?: any[];
    as: string;
};
type UnwindType = string | {
    path: string;
    includeArrayIndex?: string;
    preserveNullAndEmptyArrays?: boolean;
};
type UnionType = {
    coll: string;
};
export type AggregateType<T> = {
    $match?: FilterTypeNullable<T> | FilterTypeOrAnd<T>;
    $sort?: ModifyType<T, 1 | -1> | {
        [K: string]: 1 | -1;
    };
    $limit?: number;
    $skip?: number;
    $addFields?: AddFieldType<T>;
    $group?: GroupFieldType<T>;
    $lookup?: LookupType | LookupType[];
    $unwind?: UnwindType | UnwindType[];
    $out?: string;
    $unionWith?: UnionType;
    $project?: any;
};
export type DeepKeys<T> = T extends object ? {
    [K in keyof T & (string | number)]: K | `${K}.${DeepKeys<T[K]>}`;
}[keyof T & (string | number)] : never;
export type FilterType = Record<string, string | number | boolean | any>;
export type GetLastOptions = {
    sortField: string;
    direction: 1 | -1;
    filter?: FilterType;
};
export type SortObject<T extends object = object> = {
    sortField: DeepKeys<T>;
    direction: 1 | -1;
    priority: number;
};
export type GetOptions<T = Array<string>> = {
    fields?: T;
    excludeFeilds?: Array<string>;
};
export type ListOptions<T extends object = object> = {
    limit?: number;
    sort?: Array<SortObject<T>>;
    fields?: Array<keyof T>;
    excludeFeilds?: Array<keyof T>;
    skip?: number;
};
export type UpdateResult = {
    modifiedCount: number;
    upsertedCount: number;
};
export declare const trxFuncDict: {
    Insert: "Insert";
    InsertMany: "InsertMany";
    UpdateMany: "UpdateMany";
    Update: "Update";
    UpdateAsNative: "UpdateAsNative";
    Delete: "Delete";
    DeleteOne: "DeleteOne";
};
export declare const queryFuncDict: {
    List: "List";
    Get: "Get";
    GetLast: "GetLast";
    GetAndUpdate: "GetAndUpdate";
    Count: "Count";
    Aggregate: "Aggregate";
    GetDistinct: "GetDistinct";
};
export interface IMongoDBConnectionManager {
    getConnection(url: string, options: {
        maxPoolSize: number;
    }): Promise<object>;
}
export type OnCommitCallback = () => void;
export interface IMongoDBTransactionQueue {
    onCommit: Hook<OnCommitCallback>;
    queueQuery(queryName: keyof typeof trxFuncDict | keyof typeof queryFuncDict, collection: string, args: IArguments): "queued" | ClientSession;
    queueScope(scopeName: string, scope: () => Promise<void>): void;
    commit(): Promise<void>;
    abort(): void;
}
export type GetReturnType<TTrx, TRetVal> = TTrx extends IMongoDBTransactionQueue ? undefined : TRetVal;
export interface IDataStoreManager {
    dbName: string;
    List2<T extends object, RetT extends object = T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: ListOptions<RetT> & {
        trxQueue?: TTrx;
    }): Promise<Array<RetT>>;
    List<T, RetT = T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: ListOptions & {
        trxQueue?: TTrx;
    }): Promise<Array<RetT>>;
    Get<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: GetOptions & {
        trxQueue?: TTrx;
    }): Promise<T | undefined>;
    Get2<T, RetT = T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: GetOptions<Array<keyof RetT>> & {
        trxQueue?: TTrx;
    }): Promise<RetT | undefined>;
    GetLast<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, options: GetLastOptions & {
        trxQueue?: TTrx;
    }): Promise<T>;
    Insert<T extends object, RetT = T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, item: T, options: {
        trxQueue?: TTrx;
    }): Promise<GetReturnType<TTrx, RetT>>;
    InsertMany<T extends object, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, items: Array<T>, options: {
        trxQueue?: TTrx;
    }): Promise<void>;
    Update<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, updateValue: UpdateTypeNullable<T>, options: {
        trxQueue?: TTrx;
        ignoreUndefined?: boolean;
    } & ({
        upsert: true;
        setOnInsert?: UpdateTypeNullable<T>;
    } | {
        upsert?: false;
    })): Promise<GetReturnType<TTrx, UpdateResult>>;
    GetAndUpdate<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, updateValue: RawUpdateTypeNullable<T>, options?: {
        returnDocument?: "before" | "after";
        upsert?: boolean;
        trxQueue?: TTrx;
    }): Promise<T | undefined>;
    UpdateMany<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, updateValue: UpdateTypeNullable<T>, options?: {
        upsert?: boolean;
        trxQueue?: TTrx;
        ignoreUndefined?: boolean;
    }): Promise<GetReturnType<TTrx, UpdateResult>>;
    UpdateAsNative<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, update: UpdateFilter<T> | Partial<T>, options?: {
        trxQueue?: TTrx;
    }): Promise<GetReturnType<TTrx, UpdateResult>>;
    Delete<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options: {
        trxQueue?: TTrx;
    }): Promise<GetReturnType<TTrx, number>>;
    Count<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: {
        trxQueue?: TTrx;
    }): Promise<number>;
    Aggregate<T, RetT = T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, pipeline: Array<AggregateType<T>>, options?: {
        trxQueue?: TTrx;
    }): Promise<Array<RetT>>;
    GetDistinct<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, key: string, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: {
        trxQueue?: TTrx;
    }): Promise<T | undefined>;
    CreateIndexes<T>(collectionName: CollectionName, indexDefinitions: IndexDefinitions<T>): Promise<void>;
    DeleteOne<T, TTrx extends IMongoDBTransactionQueue | void = IMongoDBTransactionQueue>(collectionName: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: {
        trxQueue?: TTrx;
    }): Promise<GetReturnType<TTrx, number>>;
    startTransactionQueue(): any;
}
export {};
//# sourceMappingURL=IDataStoreManager.d.ts.map