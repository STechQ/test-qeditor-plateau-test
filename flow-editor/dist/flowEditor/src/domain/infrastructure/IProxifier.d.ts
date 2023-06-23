import { INTERNAL_Snapshot } from "valtio/vanilla";
export interface IProxifier {
    proxify<T extends object>(object: T): T;
    subscribe<T extends object>(object: T, changeCb: () => void): () => void;
    subscribeKey<T extends object, K extends keyof T>(object: T, key: K, changeCb: () => void): () => void;
    markRaw<T extends object>(object: T): T;
    useSnapshot<T extends object>(object: T): INTERNAL_Snapshot<T>;
}
export declare const IProxifier: unique symbol;
//# sourceMappingURL=IProxifier.d.ts.map