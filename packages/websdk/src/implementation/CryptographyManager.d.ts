import { ICryptographyManager } from "../../../../common/qshell";
export declare class CryptographyManager implements ICryptographyManager {
    contextName: string;
    constructor({ contextName }: {
        contextName: string;
    });
    cryptoGenerateKeyPair(): {};
    cryptoStore(keyPair: Record<string, string>): void;
    cryptoSha512(value: string): string;
    cryptoSign(value: string, privateKey: string, options?: {
        digestAlgorithm: string | "sha512";
        padding: string | "pkcs15";
    }): string;
}
//# sourceMappingURL=CryptographyManager.d.ts.map