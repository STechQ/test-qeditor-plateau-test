interface SubtleCrypto {
}
/** Basic cryptography features available in the current context. It allows access to a cryptographically strong random number generator and to cryptographic primitives. */
interface Crypto {
    /** Available only in secure contexts. */
    readonly subtle: SubtleCrypto;
    getRandomValues<T extends ArrayBufferView | null>(array: T): T;
    /** Available only in secure contexts. */
    randomUUID(): string;
}
declare var crypto: Crypto;
export declare const isomorphicCrypto: typeof crypto;
export {};
//# sourceMappingURL=crpyoPollyfill.d.ts.map