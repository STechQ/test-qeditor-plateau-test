import { ICryptographyManager } from "../../../../common/qshell";
import { IDecryptDataRequest, IDecryptDataResponse, IEncryptDataRequest, IEncryptDataResponse, IHashDataRequest, IHashDataResponse } from "../../../../common/shrimp/helpers/cryptoHelper";
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
    hash(data: IHashDataRequest): Promise<IHashDataResponse>;
    encrypt(data: IEncryptDataRequest): Promise<IEncryptDataResponse>;
    decrypt(data: IDecryptDataRequest): Promise<IDecryptDataResponse>;
}
//# sourceMappingURL=CryptographyManager.d.ts.map