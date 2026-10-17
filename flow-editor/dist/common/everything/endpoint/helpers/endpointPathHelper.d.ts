export declare class EndpointPathHelper {
    static readonly appIdPrefix = "/{{appId}}";
    static stripAppIdPrefix(path: string): string;
    static withAppIdPrefix(path: string): string;
    static getContextPathError(path: string): string | undefined;
    static getPathError(path: string): string | undefined;
}
//# sourceMappingURL=endpointPathHelper.d.ts.map