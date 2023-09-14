import { AxiosRequestConfig } from 'axios';
import { INetworkManager } from "../../../../common/qshell";
import { IDictionary } from "../../../../common/shrimp/interfaces/IDictionary";
import { IContainerServicesWrapper, INetwork, IRequestOptions } from "../../../../common/shrimp/interfaces/quick/IContainerServices";
import { INetworkResponse } from "../../../../common/shrimp/interfaces/quick/INetworkResponse";
import { IWebSDKSettingsWrapper } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
import { StoreManager } from "../implementation/StoreManager";
export default class NetworkManagerImpl implements INetworkManager {
    contextName: string;
    private settingsWrapper;
    private typeHelper;
    private storeManager;
    private servicesWrapper;
    constructor(contextName: string, settingsWrapper: IWebSDKSettingsWrapper, servicesWrapper: IContainerServicesWrapper, storeManager: StoreManager);
    checkPlateauIAM(qjson: any): Promise<void>;
    private getConfiguration;
    private manageOtherDomains;
    private urlDecider;
    private getUrl;
    private openLoading;
    private closeLoading;
    axiosCommon(type: keyof INetwork, url: string, body?: string | object | BinaryType | FormData, axiosConfig?: AxiosRequestConfig, options?: IRequestOptions): Promise<any>;
    getQjson<RetType extends string | object>({ url, urlParams, headers, options }: {
        url: string;
        urlParams?: object;
        headers?: IDictionary<string> | undefined;
        options: {
            disableLoading: boolean;
        };
    }): Promise<INetworkResponse<RetType>>;
    get<RetType extends string | object>({ url, urlParams, headers, config, options }: {
        url: string;
        urlParams?: object;
        headers?: IDictionary<string> | undefined;
        config?: AxiosRequestConfig;
        options?: IRequestOptions;
    }): Promise<INetworkResponse<RetType>>;
    post<RetType extends string | object>({ url, urlParams, body, headers, config, options }: {
        url: string;
        urlParams?: object;
        body?: string | object | BinaryType;
        headers?: IDictionary<string> | undefined;
        config?: AxiosRequestConfig;
        options?: IRequestOptions;
    }): Promise<INetworkResponse<RetType>>;
    postHeader<RetType extends string | object>({ url, urlParams, body, headers, config }: {
        url: string;
        urlParams?: object;
        body?: string | object | BinaryType;
        headers?: IDictionary<string> | undefined;
        config?: AxiosRequestConfig;
    }): Promise<INetworkResponse<RetType>>;
    patch<RetType extends string | object>({ url, urlParams, body, headers, options }: {
        url: string;
        urlParams?: object;
        body?: string | object | BinaryType;
        headers?: IDictionary<string> | undefined;
        options?: IRequestOptions;
    }): Promise<INetworkResponse<RetType>>;
    multipart<RetType extends string | object>({ url, urlParams, body, headers, options }: {
        url: string;
        urlParams?: object;
        body?: string | object | Blob;
        headers?: IDictionary<string> | undefined;
        options?: IRequestOptions;
    }): Promise<INetworkResponse<RetType>>;
    put<RetType extends string | object>({ url, urlParams, body, headers, options }: {
        url: string;
        urlParams?: object;
        body?: string | object;
        headers?: IDictionary<string> | undefined;
        options?: IRequestOptions;
    }): Promise<INetworkResponse<RetType>>;
    delete<RetType extends string | object>({ url, urlParams, headers, body, options }: {
        url: string;
        urlParams?: object;
        headers?: IDictionary<string> | undefined;
        body?: string | object;
        options?: IRequestOptions;
    }): Promise<INetworkResponse<RetType>>;
}
//# sourceMappingURL=NetworkManagerImpl.d.ts.map