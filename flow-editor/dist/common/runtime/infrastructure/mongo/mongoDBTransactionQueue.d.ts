import { IDataStoreManager, IMongoDBTransactionQueue, OnCommitCallback, trxFuncDict } from "./IDataStoreManager";
import { MongoClient, ClientSession } from "mongodb";
import { Hook } from "@stechquick/algae/lib/helpers/hook.js";
export declare class MongoDBTransactionQueue implements IMongoDBTransactionQueue {
    private readonly ds;
    private readonly getClientCb;
    private _session?;
    private queryQueue;
    readonly onCommit: Hook<OnCommitCallback>;
    constructor(ds: IDataStoreManager, getClientCb: () => Promise<MongoClient>);
    queueQuery(queryName: keyof typeof trxFuncDict, collection: string, args: IArguments): "queued" | ClientSession;
    queueScope(scopeName: string, scope: () => Promise<void>): void;
    commit(): Promise<void>;
    abort(): void;
}
//# sourceMappingURL=mongoDBTransactionQueue.d.ts.map