import { IWebSDK } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
export declare class LivePreviewManager {
    private frameCommunication?;
    private livePreviewID;
    private getQjsonUrlPrefix;
    constructor();
    isItLivePreview(): Promise<string | false>;
    getLivePreviewSettings(): Promise<any | undefined>;
    sendSwMessage(packId: any): Promise<{
        type: "lpServiceWorkerRequestResponse";
        resourceModel: string;
        resourceId: string;
        resourceType: string;
    } | undefined>;
    setExternalQJsonRetriever(sdk: IWebSDK): void;
}
//# sourceMappingURL=LivePreviewManager.d.ts.map