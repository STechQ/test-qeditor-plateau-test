export declare enum HashAlgorithm {
    SHA1 = "SHA-1",
    SHA256 = "SHA-256",
    SHA384 = "SHA-384",
    SHA512 = "SHA-512"
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
    algorithm: HashAlgorithm;
}
export interface IEncryptDataResponse {
    encryptedData: string;
    iv?: string;
}
export interface IEncryptDataRequest {
    data: string;
    key: string;
    algorithm: EncryptionAlgorithm;
}
export interface IDecryptDataResponse {
    decryptedData: string;
}
export interface IDecryptDataRequest {
    encryptedData: string;
    iv?: string;
    key: string;
    algorithm: EncryptionAlgorithm;
}
export declare class CryptoHelper {
    private static guidCounter;
    /**
     *
     * @param base number layout (number of distinct digits) (10'luk sayı düzeni, 16'lık sayı düzeni)
     * @param length length of word. Max value: 16
     */
    static GetRandomWord(base: number, length: number): string;
    /**
     * Ex: be945482-jf10-40d1-a50d-rzxa2c41fdcu
     */
    static CreateGuid(): string;
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