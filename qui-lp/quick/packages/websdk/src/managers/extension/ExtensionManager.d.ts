import { ContextManager } from "../../../../../common/shrimp/context";
import { IComponentCollection } from "../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IWebSDKSettingsWrapper } from "../../../../../common/shrimp/interfaces/quick/IWebSDK";
export declare class ExtensionManager {
    private initialze;
    ManageComponent(compCollection: IComponentCollection, attrs: Record<string, any>, settingsWrapper: IWebSDKSettingsWrapper, websdkContext: ContextManager): void;
    UpdateComponent(compCollection: IComponentCollection, attrs: Record<string, any>, settingsWrapper: IWebSDKSettingsWrapper, websdkContext: ContextManager): void;
    private extensionDomLocator;
    updateExplictComponents: Record<string, (options?: {
        domEl?: any;
        oldCompQUID?: string;
        compElID?: string;
    }) => void>;
}
//# sourceMappingURL=ExtensionManager.d.ts.map