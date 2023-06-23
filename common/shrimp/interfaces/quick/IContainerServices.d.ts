import { IComponent } from "../ComponentInterfaces/IComponent";
import { IDictionary } from "../IDictionary";
import { IHostResponseData } from "../IHostResponseData";
import { IDomElement } from "../RenderingInterfaces/IDomElement";
import { IRenderer } from "../RenderingInterfaces/IRenderer";
import { INavigationManager } from "./INavigationManager";
import { INetworkResponse } from "./INetworkResponse";
import { ICustomerContext, IUserContext } from "./IUserContext";
export declare type PostResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
export interface IRequestOptions {
    disableLoading?: boolean;
    withCredentials?: boolean;
    timeout?: number;
}
export interface INetwork {
    get<RetType extends string | object | BinaryType>({ url, urlParams, headers, config, options }: {
        url: string;
        urlParams?: object;
        config?: {
            responseType: PostResponseType;
        };
        headers?: IDictionary<string>;
        options?: IRequestOptions;
    }): Promise<INetworkResponse<RetType>>;
    post<RetType extends string | object | BinaryType>({ url, urlParams, body, headers, config, options }: {
        url: string;
        urlParams?: object;
        body?: string | object | BinaryType;
        headers?: IDictionary<string>;
        config?: {
            responseType: PostResponseType;
        };
        options?: IRequestOptions;
    }): Promise<INetworkResponse<RetType>>;
    patch<RetType extends string | object | BinaryType>({ url, urlParams, body, headers, options }: {
        url: string;
        urlParams?: object;
        body?: string | object | BinaryType;
        headers?: IDictionary<string>;
        options?: IRequestOptions;
    }): Promise<INetworkResponse<RetType>>;
    multipart<RetType extends string | object | BinaryType>({ url, urlParams, body, headers, options }: {
        url: string;
        urlParams?: object;
        body?: BinaryType;
        headers?: IDictionary<string>;
        options?: IRequestOptions;
    }): Promise<INetworkResponse<RetType>>;
    put<RetType extends string | object | BinaryType>({ url, urlParams, body, headers, options }: {
        url: string;
        urlParams?: object;
        body?: string | object | BinaryType;
        headers?: IDictionary<string>;
        options?: IRequestOptions;
    }): Promise<INetworkResponse<RetType>>;
    delete<RetType extends string | object | BinaryType>({ url, urlParams, body, headers, options }: {
        url: string;
        urlParams?: object;
        body?: string | object;
        headers?: IDictionary<string>;
        options?: IRequestOptions;
    }): Promise<INetworkResponse<RetType>>;
}
export interface IContainerServicesWrapper {
    services: IContainerServices;
}
export interface IContainerServices {
    getPlateauIAM?: () => any;
    /**
     * Get final url for redirections. You can manage proxy via this function.
     * ex: You can manage environment based domains.
     * @returns full url
     */
    getURL?: (url: string, mode: "ui" | "service") => string | undefined;
    getCompDomLocator?: (componentType: string) => (compInstance: IComponent, childIndex: number) => IDomElement | null;
    activeRendererCb?: () => IRenderer;
    hostTriggerCb?: (functionName: string, params: Record<string, any>, pageNameArray: Array<string>) => Promise<IHostResponseData>;
    authenticatedCb?: () => boolean;
    resourceCb?: (resource: string) => any;
    callMessageBox?: (messageType: string, messages: string, title: string) => any;
    userContextCb?: () => IUserContext;
    customerContextCb?: () => ICustomerContext;
    getCurrentLanguageCb?: () => any;
    print?: (data: any) => any;
    scan?: (data: any) => any;
    ocr?: (data: any) => any;
    biometric?: (data: any) => any;
    getContainerName?: () => any;
    getStoreDataCb?: (storeData: string) => any;
    logout?: () => any;
    extensions?: IDictionary<((data: any) => any) | IDictionary<any>>;
    network?: INetwork;
    getThemeListCb?: () => Array<string> | undefined;
    setThemeCb?: (themeName: string) => void;
    addThemeCb?: (themeName: string) => void;
    removeThemeCb?: (themeName: string) => void;
    setRegionCb?: (regionName: string) => void;
    getRegionListCb?: () => Array<string> | undefined;
    getCurrentRegionCb?: () => string | undefined;
    getDeviceIdCb?: () => string | undefined;
    navigationManager?: INavigationManager;
}
//# sourceMappingURL=IContainerServices.d.ts.map