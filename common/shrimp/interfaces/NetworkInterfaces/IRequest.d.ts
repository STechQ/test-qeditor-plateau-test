import { IDictionary } from "../IDictionary";
export interface IRequest extends IBaseRequest {
    responseField: string | null;
    onSuccess: string | null;
    onFail: string | null;
    blockRender: boolean;
    showSuccessMessage?: boolean;
    showErrorMessage?: boolean;
    args?: IDictionary<any>;
    headers?: IDictionary<string>;
    disableLoading?: boolean;
    /**
    * True to send credentials (cookies) in a cross-origin request. False to ignore for request and ignore cookies in its response. default: false.
    */
    withCredentials?: boolean;
    timeout?: number;
}
export interface IBaseRequest {
    url: string;
    http: "GET" | "get" | "POST" | "post" | "MULTIPART" | "multipart" | "PUT" | "put" | "POSTBLOB" | "postblob" | "DELETE" | "delete" | "PATCH" | "patch";
    data: any;
}
export interface IDownloadRequest extends IBaseRequest {
}
//# sourceMappingURL=IRequest.d.ts.map