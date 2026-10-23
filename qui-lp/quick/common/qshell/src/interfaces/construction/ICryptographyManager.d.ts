import { IContextItem } from "../../../../shrimp/context";
import { IDecryptDataRequest, IDecryptDataResponse, IEncryptDataRequest, IEncryptDataResponse, IHashDataRequest, IHashDataResponse } from "../../../../shrimp/helpers/cryptoHelper";
export declare const CryptographyContextName: string;
export interface ICryptographyManager extends IContextItem {
    hash?: (data: IHashDataRequest) => Promise<IHashDataResponse>;
    encrypt?: (data: IEncryptDataRequest) => Promise<IEncryptDataResponse>;
    decrypt?: (data: IDecryptDataRequest) => Promise<IDecryptDataResponse>;
    stringToBase64?: (data: string) => string;
    base64ToString?: (data: string) => string;
}
//# sourceMappingURL=ICryptographyManager.d.ts.map