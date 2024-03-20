import { IContainerServices } from "../../../../common/shrimp/interfaces/quick/IContainerServices";
import { IFormattingDefinition } from "../../../../common/shrimp/interfaces/quick/IFormattingDefinition";
import { IWebSDKSettingsWrapper } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
import { IRegionalManager } from "../../../../common/qshell";
export declare class RegionalManagerImpl implements IRegionalManager {
    static ContextName: string;
    contextName: string;
    private currentRegion;
    settingsWrapper: IWebSDKSettingsWrapper;
    services?: IContainerServices;
    constructor(settingsWrapper: IWebSDKSettingsWrapper);
    getRegionList(): string[];
    setRegion(regionName: string): void;
    getRegion(): string;
    getFormattingDefinitionByCurrentRegion(): IFormattingDefinition | undefined;
    getFormattingDefinitionBySelectedRegion(selectedRegion: string): IFormattingDefinition | undefined;
    onLRChange(language?: string): void;
}
//# sourceMappingURL=RegionalManagerImpl.d.ts.map