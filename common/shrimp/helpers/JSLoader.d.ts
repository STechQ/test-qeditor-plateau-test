export interface IJSLoaderOptions {
    charset?: string;
    scriptTagProps?: Record<string, any>;
}
export declare class JSLoader {
    JSName: string;
    SuccessCB: Function | undefined;
    FailCB: Function;
    TryCount: number;
    noCache: boolean;
    cacheVersion: number;
    options: IJSLoaderOptions;
    constructor(jsName: string, successCb: Function | undefined, failCb: Function, tryCount: number, noCache?: boolean, cacheVersion?: number, options?: {});
    LoadJS(type?: string): void;
    private createCallBackObject;
}
//# sourceMappingURL=JSLoader.d.ts.map