import { IStoreManager } from "../../../../common/qshell";
export declare type StoreManagerHookCb = (oldValue: any, newValue: any) => void;
export declare class StoreManager implements IStoreManager {
    contextName: string;
    private dataStore;
    private hooks;
    constructor({ contextName }: {
        contextName: string;
    });
    set(name: string, value: any): void;
    get(name: string): any;
    delete(name: string): void;
    subscribe(name: string, cb: StoreManagerHookCb): void;
    unsubscribe(name: string, cb: StoreManagerHookCb): void;
    setSessionStorage?({ key, value }: {
        key: string;
        value: string;
    }): void;
    clearSessionStorage?(): void;
    getItemFromSessionStorage?({ key }: {
        key: string;
    }): string | null;
    removeItemFromSessionStorage?({ key }: {
        key: string;
    }): void;
    setLocalStorage?({ key, value }: {
        key: string;
        value: string;
    }): void;
    clearLocalStorage?(): void;
    getItemFromLocalStorage?({ key }: {
        key: string;
    }): string | null;
    removeItemFromLocalStorage?({ key }: {
        key: string;
    }): void;
}
//# sourceMappingURL=StoreManager.d.ts.map