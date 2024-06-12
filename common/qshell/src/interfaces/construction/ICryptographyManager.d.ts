import { IContextItem } from "../../../../shrimp/context";
import { IDecryptDataRequest, IDecryptDataResponse, IEncryptDataRequest, IEncryptDataResponse, IHashDataRequest, IHashDataResponse } from "../../../../shrimp/helpers/cryptoHelper";
export declare const CryptographyContextName: string;
export interface ICryptographyManager extends IContextItem {
    cryptoGenerateKeyPair?: () => Record<string, string>;
    cryptoStore?: (keyPair: Record<string, string>) => void;
    cryptoSha512?: (value: string) => string;
    cryptoSign?: (value: string, privateKey: string, options?: {
        digestAlgorithm: string | "sha512";
        padding: string | "pkcs15";
    }) => string;
    hash?: (data: IHashDataRequest) => Promise<IHashDataResponse>;
    encrypt?: (data: IEncryptDataRequest) => Promise<IEncryptDataResponse>;
    decrypt?: (data: IDecryptDataRequest) => Promise<IDecryptDataResponse>;
}
//# sourceMappingURL=ICryptographyManager.d.ts.map