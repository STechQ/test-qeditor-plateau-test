import { IWebSDK } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
export declare class LivePreviewManager {
    private frameCommunication;
    private livePreviewID;
    private getQjsonUrlPrefix;
    constructor(targetWindow: Window);
    isItLivePreview(): Promise<string | undefined>;
    getLivePreviewSettings(): Promise<any | undefined>;
    setExternalQJsonRetriever(sdk: IWebSDK): void;
}
//# sourceMappingURL=LivePreviewManager.d.ts.map