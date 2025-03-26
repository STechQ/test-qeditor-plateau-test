export declare enum HashAlgorithm {
    SHA1 = "SHA-1",
    SHA256 = "SHA-256",
    SHA384 = "SHA-384",
    SHA512 = "SHA-512",
    HMACSHA1 = "SHA-1",
    HMACSHA256 = "SHA-256",
    HMACSHA384 = "SHA-384",
    HMACSHA512 = "SHA-512"
}
export declare enum EncryptionAlgorithm {
    RSAOAEP = "RSA-OAEP",
    AESCTR = "AES-CTR",
    AESCBC = "AES-CBC",
    AESGCM = "AES-GCM"
}
export interface IHashDataResponse {
    hashedData: string;
}
export interface IHashDataRequest {
    data: string;
    key?: string;
    algorithm: HashAlgorithm;
}
export interface IEncryptDataResponse {
    encryptedData: string;
    iv?: string;
}
export interface IEncryptDataRequest {
    data: string;
    key: string;
    ivKey?: string;
    algorithm: EncryptionAlgorithm;
}
export interface IDecryptDataResponse {
    decryptedData: string;
}
export interface IDecryptDataRequest {
    encryptedData: string;
    key: string;
    iv?: string;
    ivKey?: string;
    algorithm: EncryptionAlgorithm;
}
export declare class CryptoHelper {
    static hash(data: IHashDataRequest): Promise<IHashDataResponse>;
    static encrypt(data: IEncryptDataRequest): Promise<IEncryptDataResponse>;
    static decrypt(data: IDecryptDataRequest): Promise<IDecryptDataResponse>;
    private static getSpkiPkcsDer;
    private static generateCryptoKey;
    private static createFixedLengthArrayBufferFromString;
    static encodeABToBase64(buffer: ArrayBuffer): string;
    static decodeBase64ToAB(base64: string): ArrayBufferLike;
}
//# sourceMappingURL=cryptoHelper.d.ts.map