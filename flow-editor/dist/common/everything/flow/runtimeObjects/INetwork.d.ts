import { AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios";
import { RequestCacheOptions } from "../../../runtime/infrastructure/cache/IServiceCacheRequest";
export type Method = 'GET' | 'POST';
export type IRequestHeaders = Record<string, string | number | boolean | undefined>;
export type RequestHandler<TReqBody, TRespBody> = (cacheOptions: RequestCacheOptions<TRespBody>, requestOptions: IRequest<TReqBody>) => Promise<IResponse<TRespBody>>;
export interface IRequest<TReqBody> {
    method: Method;
    url: string;
    body?: TReqBody;
    headers?: IRequestHeaders;
    timeout?: number;
}
export interface IResponse<TRespBody> {
    body: TRespBody;
    headers: RawAxiosResponseHeaders | AxiosResponseHeaders | Headers;
    status: number;
    statusText?: string;
}
export interface INetwork {
    request<TReqBody, TRespBody>(request: IRequest<TReqBody>): Promise<IResponse<TRespBody>>;
}
//# sourceMappingURL=INetwork.d.ts.map