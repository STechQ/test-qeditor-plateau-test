export interface IPlatformClientResponse {
    statusCode: number;
    headers?: Record<string, string>;
    body?: any;
}
export interface IPlatformClientRequest {
    method: "get" | "post";
    url: string;
    queryString?: Record<string, string>;
    headers?: Record<string, string>;
    body?: any;
}
export interface IAlertOptions {
    title?: string;
    text?: string;
    category?: "info" | "warning" | "error" | "success";
}
export interface IStore {
    get: (key: any) => Record<string, any>;
    set: (obj: any) => void;
}
export interface IPlatformClientAdaptor {
    getFormData(): Record<string, any>;
    request: (request: IPlatformClientRequest) => Promise<IPlatformClientResponse>;
    go: (qjsonPath: string) => void;
    alert: (options: IAlertOptions) => void;
}
//# sourceMappingURL=IPlatformClientAdaptor.d.ts.map