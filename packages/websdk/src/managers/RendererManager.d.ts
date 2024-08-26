import { IThemeSettings } from "@stechquick/algae/lib/quick/ITheme";
import Vue from "vue";
import { QShell } from "../../../../common/qshell";
import { ContextManager } from "../../../../common/shrimp/context";
import { IDomElement } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IDomElement";
import { IDoryRenderer, IRenderer } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IRendererConfig } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IRendererConfig";
import { IContainerServicesWrapper } from "../../../../common/shrimp/interfaces/quick/IContainerServices";
import { IWebSDKSettingsWrapper } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
import { StoreManager } from "../implementation/StoreManager";
import { WindowHistoryManager } from "./WindowHistoryManager";
export declare class RendererManager {
    private static readonly doryPrefix;
    private static doryCounter;
    private renderers;
    private servicesWrapper;
    private lastRenderer?;
    private windowHistoryManager?;
    private settingsWrapper;
    private websdkContext;
    private globalMethods;
    private storeManager;
    constructor(storeManager: StoreManager, settingsWrapper: IWebSDKSettingsWrapper, servicesWrapper: IContainerServicesWrapper, websdkContext: ContextManager);
    createRenderer({ mountPoint, qshell, config, windowHistoryManager }: {
        mountPoint: IDomElement;
        qshell: QShell;
        config?: IRendererConfig;
        windowHistoryManager?: WindowHistoryManager;
    }): IDoryRenderer;
    getLastRenderer(): IRenderer | undefined;
    getDomContainer(renderer: IRenderer): IDomElement;
    getParentInstance(renderer: IRenderer): Vue;
    clear(renderer: IRenderer): void;
    setEnvironment(env: any): void;
    setYamlLogType(logType: string): void;
    setThemes(themeSettings: IThemeSettings | undefined): void;
}
//# sourceMappingURL=RendererManager.d.ts.map