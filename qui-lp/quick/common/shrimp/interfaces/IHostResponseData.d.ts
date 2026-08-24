export interface IHostResponseData {
    isSuccess: boolean;
    retVal: any;
}
export type IContainerServicesResponseReal = any;
export type IContainerResponseData = {
    isSuccess: true;
    retVal: {
        funcRetVal: IContainerServicesResponseReal;
    };
} | {
    isSuccess: false;
    error: {
        message: string;
        code: string;
        [TKey: string]: any;
    };
};
//# sourceMappingURL=IHostResponseData.d.ts.map