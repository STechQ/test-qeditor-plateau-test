import { IContainerServicesWrapper } from "../../../../common/shrimp/interfaces/quick/IContainerServices";
import { INavigationDemandType } from "../../../../common/shrimp/interfaces/quick/INavigationDemand";
import { IWebSDKSettingsWrapper } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
import { RendererManager } from "./RendererManager";
export declare class WindowHistoryManager {
    contextName: string;
    private settingsWrapper;
    private servicesWrapper;
    private rendererManager;
    constructor(contexName: string, settingsWrapper: IWebSDKSettingsWrapper, rendererManager: RendererManager, servicesWrapper: IContainerServicesWrapper);
    pushState(pageId?: string, pageName?: string, navigationDirection?: INavigationDemandType, override?: boolean): Promise<void>;
    Init(): void;
}
//# sourceMappingURL=WindowHistoryManager.d.ts.map