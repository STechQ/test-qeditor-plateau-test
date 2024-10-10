import { ICryptographyManager } from "../../../../common/qshell";
import { IDecryptDataRequest, IDecryptDataResponse, IEncryptDataRequest, IEncryptDataResponse, IHashDataRequest, IHashDataResponse } from "../../../../common/shrimp/helpers/cryptoHelper";
export declare class CryptographyManager implements ICryptographyManager {
    contextName: string;
    constructor({ contextName }: {
        contextName: string;
    });
    hash(data: IHashDataRequest): Promise<IHashDataResponse>;
    encrypt(data: IEncryptDataRequest): Promise<IEncryptDataResponse>;
    decrypt(data: IDecryptDataRequest): Promise<IDecryptDataResponse>;
    static stringToBase64(data: string): string;
    static base64ToString(data: string): string;
}
//# sourceMappingURL=CryptographyManager.d.ts.map