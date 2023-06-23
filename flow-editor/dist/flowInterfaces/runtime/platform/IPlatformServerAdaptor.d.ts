export interface IPlatformServerAdaptor {
    getHttpMethod(): string;
    getPath(): string;
    getBody(): unknown;
    getCookieString(): string | undefined;
    getHeaders(): Record<string, Array<string> | string | undefined>;
    setHeaders(headers: Record<string, string>): void;
    writeResponse(resp: {
        statusCode: number;
        body: unknown;
        headers?: Record<string, string>;
    }): void;
}
//# sourceMappingURL=IPlatformServerAdaptor.d.ts.map