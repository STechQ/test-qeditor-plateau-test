export interface IRandomStringOptions {
    numbers?: boolean;
    letters?: {
        lowercase?: boolean;
        uppercase?: boolean;
    };
    length: number;
}
export interface ICrypto {
    generateRandomString(options: IRandomStringOptions): string;
}
export declare const ICrypto: unique symbol;
//# sourceMappingURL=ICrypto.d.ts.map