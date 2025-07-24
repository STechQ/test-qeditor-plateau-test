import { IPlateauUIObject } from "@stechquick/algae/lib/quick/IPlateauUI";
import { IComponentCollection } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IContainerServicesWrapper } from "../../../../common/shrimp/interfaces/quick/IContainerServices";
import { IUXManager } from "../../../../common/shrimp/interfaces/quick/IUXManager";
import { IWebSDKSettingsWrapper } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
export declare class UXManagerImpl implements IUXManager {
    private servicesWrapper;
    private settingsWrapper;
    contextName: string;
    private uxHelper;
    constructor(settingsWrapper: IWebSDKSettingsWrapper, servicesWrapper: IContainerServicesWrapper);
    getThemeList(): string[] | undefined;
    setTheme(themeName: string, style?: IPlateauUIObject): void;
    addTheme(themeName: string, style?: IPlateauUIObject): void;
    removeTheme(themeName: string): void;
    setDarkTheme(compCollection: IComponentCollection, isDark: boolean): void;
}
//# sourceMappingURL=UXManagerImpl.d.ts.map