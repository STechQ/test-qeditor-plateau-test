import { IProxifier } from "../domain/infrastructure/IProxifier";
export declare class ProxifierImpl implements IProxifier {
    proxify<T extends object>(object: T): T;
    subscribe<T extends object>(object: T, changeCb: () => void): () => void;
    subscribeKey<T extends object, K extends keyof T>(object: T, key: K, changeCb: () => void): () => void;
    markRaw<T extends object>(object: T): T & {
        $$valtioRef: true;
    };
    useSnapshot<T extends object>(object: T): import("valtio/vanilla").INTERNAL_Snapshot<T>;
}
//# sourceMappingURL=proxifierImpl.d.ts.map