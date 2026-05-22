export interface IMime {
    getContentType(extension: string): string;
    getContentTypeWithFileName(fileName: string): string;
    getFileExtension(fileName: string): string;
}
export declare const IMime: unique symbol;
//# sourceMappingURL=IMime.d.ts.map