import { IIntegrationsManager } from "../../../../common/qshell/src/interfaces/construction/IIntegrationsManager";
import { IWebSDKSettingsWrapper } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
export declare class IntegrationsManagerImpl implements IIntegrationsManager {
    contextName: string;
    private settingsWrapper;
    constructor({ contextName, settingsWrapper }: {
        contextName: string;
        settingsWrapper: IWebSDKSettingsWrapper;
    });
    customIntegrationEventTrigger(name: string, params: any[]): void;
}
//# sourceMappingURL=IntegrationsManagerImpl.d.ts.map