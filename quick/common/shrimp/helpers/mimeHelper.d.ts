export declare class MimeHelper {
    static base64ToBytes(base64: string): Uint8Array;
    static toHex(bytes: Uint8Array, n?: number): string;
    static detectMimeFromBase64(base64: string): {
        debugHexHead: string;
        mime: string;
        ext: string;
    };
    static detectMimeFromBytes(bytes: Uint8Array): {
        mime: string;
        ext: string;
    };
    /**
   * MIME tespitinden sonra data URL üretmek istersen
   */
    static toDataUrlFromBase64(base64: string, mime: string): string;
}
//# sourceMappingURL=mimeHelper.d.ts.map