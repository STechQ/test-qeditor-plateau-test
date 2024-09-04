export interface IPlatformServerAdaptor {
    getHttpMethod(): string;
    getPath(): string;
    getBody(): unknown;
    getCookieString(): string | undefined;
    getHeaders(): Record<string, Array<string> | string | undefined>;
    getQueryParameters(): Record<string, string | Array<string>>;
    setHeaders(headers: Record<string, string>): void;
    writeResponse(resp: {
        statusCode: number;
        body: unknown;
        headers?: Record<string, string>;
    }): void;
    getEnvVar(key: string, options: {
        requestingStepName?: string;
    }): string | undefined;
}
//# sourceMappingURL=IPlatformServerAdaptor.d.ts.map