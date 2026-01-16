export interface IPlatform {
    getDeviceId?: () => string | undefined;
    getClientInfo?: () => IClientInfo | undefined;
}
export declare type PlatformType = "Web" | "iOS" | "Android" | "ATM";
export interface IClientInfo {
    webInfo?: IWebInfo;
    mobileAppInfo?: IMobileAppInfo;
    mobileDeviceInfo?: IMobileDeviceInfo;
}
export interface IMobileDeviceInfo {
    deviceId?: string;
    osBuildInfo?: string;
    language?: string;
    screenSize?: string;
    deviceMemory?: string;
    totalStorage?: string;
    networkType?: string;
    osVersion?: string;
    osName?: string;
    deviceName?: string;
    deviceModel?: string;
    deviceManufacturer?: string;
    isNfcSupported?: boolean;
}
export interface IMobileAppInfo {
    appName?: string;
    appVersion?: string;
    bundleId?: string;
    appBuild?: string;
}
export interface IWebInfo {
    cookieEnabled?: boolean;
    deviceMemory?: number;
    language?: string;
    onLine?: boolean;
    pdfViewerEnabled?: boolean;
    platform?: string;
    userAgent?: string;
    userAgentData?: INavigatorUAData;
    screenHeight?: number;
    screenwidth?: number;
}
export interface INavigatorUAData {
    brands?: IBrandInfo[];
    platform?: string;
    mobile?: boolean;
}
export interface IBrandInfo {
    brand: string;
    version: string;
}
//# sourceMappingURL=IPlatform.d.ts.map