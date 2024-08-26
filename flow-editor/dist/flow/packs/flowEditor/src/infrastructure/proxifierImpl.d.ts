import { IProxifier } from "../domain/infrastructure/IProxifier";
export declare class ProxifierImpl implements IProxifier {
    proxify<T extends object>(object: T): T;
    subscribe<T extends object>(object: T, changeCb: () => void): () => void;
    subscribeKey<T extends object, K extends keyof T>(object: T, key: K, changeCb: () => void): () => void;
    markRaw<T extends object>(object: T): T & {
        $$valtioSnapshot: T;
    };
    useSnapshot<T extends object>(object: T): T extends {
        $$valtioSnapshot: infer S;
    } ? S : T extends RegExp | Error | Date | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any> | ((...args: any[]) => any) | (string | number | bigint | boolean | symbol | null | undefined) ? T : T extends Promise<unknown> ? Awaited<T> : T extends object ? T extends infer T_1 extends object ? { readonly [K in keyof T_1]: T[K] extends infer T_2 ? T_2 extends T[K] ? T_2 extends {
        $$valtioSnapshot: infer S;
    } ? S : T_2 extends RegExp | Error | Date | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any> | ((...args: any[]) => any) | (string | number | bigint | boolean | symbol | null | undefined) ? T_2 : T_2 extends Promise<unknown> ? Awaited<T_2> : T_2 extends object ? T_2 extends infer T_3 extends object ? { readonly [K_1 in keyof T_3]: T_2[K_1] extends infer T_4 ? T_4 extends T_2[K_1] ? T_4 extends {
        $$valtioSnapshot: infer S;
    } ? S : T_4 extends RegExp | Error | Date | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any> | ((...args: any[]) => any) | (string | number | bigint | boolean | symbol | null | undefined) ? T_4 : T_4 extends Promise<unknown> ? Awaited<T_4> : T_4 extends object ? T_4 extends infer T_5 extends object ? { readonly [K_2 in keyof T_5]: T_4[K_2] extends infer T_6 ? T_6 extends T_4[K_2] ? T_6 extends {
        $$valtioSnapshot: infer S;
    } ? S : T_6 extends RegExp | Error | Date | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any> | ((...args: any[]) => any) | (string | number | bigint | boolean | symbol | null | undefined) ? T_6 : T_6 extends Promise<unknown> ? Awaited<T_6> : T_6 extends object ? T_6 extends infer T_7 extends object ? { readonly [K_3 in keyof T_7]: T_6[K_3] extends infer T_8 ? T_8 extends T_6[K_3] ? T_8 extends {
        $$valtioSnapshot: infer S;
    } ? S : T_8 extends RegExp | Error | Date | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any> | ((...args: any[]) => any) | (string | number | bigint | boolean | symbol | null | undefined) ? T_8 : T_8 extends Promise<unknown> ? Awaited<T_8> : T_8 extends object ? T_8 extends infer T_9 extends object ? { readonly [K_4 in keyof T_9]: T_8[K_4] extends infer T_10 ? T_10 extends T_8[K_4] ? T_10 extends {
        $$valtioSnapshot: infer S;
    } ? S : T_10 extends RegExp | Error | Date | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any> | ((...args: any[]) => any) | (string | number | bigint | boolean | symbol | null | undefined) ? T_10 : T_10 extends Promise<unknown> ? Awaited<T_10> : T_10 extends object ? T_10 extends infer T_11 extends object ? { readonly [K_5 in keyof T_11]: T_10[K_5] extends infer T_12 ? T_12 extends T_10[K_5] ? T_12 extends {
        $$valtioSnapshot: infer S;
    } ? S : T_12 extends RegExp | Error | Date | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any> | ((...args: any[]) => any) | (string | number | bigint | boolean | symbol | null | undefined) ? T_12 : T_12 extends Promise<unknown> ? Awaited<T_12> : T_12 extends object ? T_12 extends infer T_13 extends object ? { readonly [K_6 in keyof T_13]: T_12[K_6] extends infer T_14 ? T_14 extends T_12[K_6] ? T_14 extends {
        $$valtioSnapshot: infer S;
    } ? S : T_14 extends RegExp | Error | Date | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any> | ((...args: any[]) => any) | (string | number | bigint | boolean | symbol | null | undefined) ? T_14 : T_14 extends Promise<unknown> ? Awaited<T_14> : T_14 extends object ? T_14 extends infer T_15 extends object ? { readonly [K_7 in keyof T_15]: T_14[K_7] extends infer T_16 ? T_16 extends T_14[K_7] ? T_16 extends {
        $$valtioSnapshot: infer S;
    } ? S : T_16 extends RegExp | Error | Date | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any> | ((...args: any[]) => any) | (string | number | bigint | boolean | symbol | null | undefined) ? T_16 : T_16 extends Promise<unknown> ? Awaited<T_16> : T_16 extends object ? T_16 extends infer T_17 extends object ? { readonly [K_8 in keyof T_17]: T_16[K_8] extends infer T_18 ? T_18 extends T_16[K_8] ? T_18 extends {
        $$valtioSnapshot: infer S;
    } ? S : T_18 extends RegExp | Error | Date | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any> | ((...args: any[]) => any) | (string | number | bigint | boolean | symbol | null | undefined) ? T_18 : T_18 extends Promise<unknown> ? Awaited<T_18> : T_18 extends object ? T_18 extends infer T_19 extends object ? { readonly [K_9 in keyof T_19]: T_18[K_9] extends infer T_20 ? T_20 extends T_18[K_9] ? T_20 extends {
        $$valtioSnapshot: infer S;
    } ? S : T_20 extends RegExp | Error | Date | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any> | ((...args: any[]) => any) | (string | number | bigint | boolean | symbol | null | undefined) ? T_20 : T_20 extends Promise<unknown> ? Awaited<T_20> : T_20 extends object ? T_20 extends infer T_21 extends object ? { readonly [K_10 in keyof T_21]: any; } : never : T_20 : never : never; } : never : T_18 : never : never; } : never : T_16 : never : never; } : never : T_14 : never : never; } : never : T_12 : never : never; } : never : T_10 : never : never; } : never : T_8 : never : never; } : never : T_6 : never : never; } : never : T_4 : never : never; } : never : T_2 : never : never; } : never : T;
}
//# sourceMappingURL=proxifierImpl.d.ts.map