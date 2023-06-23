import { IContextItem } from "../../../../shrimp/context";
export declare const CryptographyContextName: string;
export interface ICryptographyManager extends IContextItem {
    cryptoGenerateKeyPair?: () => Record<string, string>;
    cryptoStore?: (keyPair: Record<string, string>) => void;
    cryptoSha512?: (value: string) => string;
    cryptoSign?: (value: string, privateKey: string, options?: {
        digestAlgorithm: string | "sha512";
        padding: string | "pkcs15";
    }) => string;
}
//# sourceMappingURL=ICryptographyManager.d.ts.map