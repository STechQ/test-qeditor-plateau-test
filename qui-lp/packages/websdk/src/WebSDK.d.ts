import { IExternalQJsonRetriever } from "@stechquick/algae/lib/quick/IExternalQJsonRetriever";
import Vue from "vue";
import "../../../common/shrimp/helpers/urlHelper";
import { IComponent } from "../../../common/shrimp/interfaces/ComponentInterfaces/IComponent";
import { IQJSon } from "../../../common/shrimp/interfaces/ComponentInterfaces/IQJson";
import { IDictionary } from "../../../common/shrimp/interfaces/IDictionary";
import { IDomElement } from "../../../common/shrimp/interfaces/RenderingInterfaces/IDomElement";
import { IRenderer } from "../../../common/shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IRendererConfig } from "../../../common/shrimp/interfaces/RenderingInterfaces/IRendererConfig";
import { IContainerServices, IContainerServicesWrapper } from "../../../common/shrimp/interfaces/quick/IContainerServices";
import { IRegionalDefinition } from "../../../common/shrimp/interfaces/quick/IFormattingDefinition";
import { IPlateauIAM } from "../../../common/shrimp/interfaces/quick/IPlateauIAM";
import { CompGroupType, IFontSettings, IWebSDK, IWebSDKSettings } from "../../../common/shrimp/interfaces/quick/IWebSDK";
import { IWebSDKSetingsBus } from "../../../common/shrimp/interfaces/quick/IWebSDKSettingsBus";
import QJsonRetrieverImpl from './implementation/QJsonRetrieverImpl';
import { StoreManagerHookCb } from "./implementation/StoreManager";
import { UXManagerImpl } from "./implementation/UXManagerImpl";
export declare class WebSDK implements IWebSDK {
    static servicesWrapper: IContainerServicesWrapper;
    config: IRendererConfig;
    private qshell;
    private rendererManager;
    private windowHistoryManager;
    qJsonRetriever: QJsonRetrieverImpl;
    private network?;
    private settingsWrapper;
    private storeManager;
    private cookieManager;
    private ux;
    private platformType;
    private platformManagerImp;
    private region;
    private dataManager;
    private hostTriggererImp;
    private languageExtensions;
    private websdkContext;
    private moduleManager;
    constructor(settings: IWebSDKSettings, services?: IContainerServices, environmentInfo?: IDictionary<string>);
    UpdateSettings(allSettings: IWebSDKSetingsBus): void;
    static getPlateauIAM(): IPlateauIAM;
    SetExternalQJsonRetriever(externalQJsonRetriever: IExternalQJsonRetriever): void;
    subscribeStoreData(name: string, cb: StoreManagerHookCb): void;
    unSubscribeStoreData(name: string, cb: StoreManagerHookCb): void;
    private UpdateServices;
    private UpdateWebSDKSettings;
    private initContainerServices;
    LoadModuleCompLists(modulePaths: Record<string, string>): Promise<any>;
    init(): void;
    LoadPipeline(): Promise<void>;
    LoadAlert(): Promise<void>;
    LoadLoading(): Promise<IQJSon | undefined>;
    LoadGlobalLocalization(): Promise<IQJSon | undefined>;
    CreateRenderer({ mountPoint, config }: {
        mountPoint: IDomElement;
        config?: IRendererConfig;
    }): IRenderer;
    GetParentInst(renderer: IRenderer): Vue;
    GetDomContainer(renderer: IRenderer): IDomElement;
    GetParentInstance(renderer: IRenderer): Vue;
    Clear(renderer: IRenderer): void;
    setComponentOverrider(cb: (compName: string) => IComponent | null): void;
    GetComponentList(compGroupNameArray: Array<CompGroupType>): Record<CompGroupType, any>;
    /**
     * Set domain prefix of qJson retriever in nemo
     * @param prefix Domain prefix of retriever
     */
    setQJsonUrlPrefix(prefix?: string): void;
    setServiceUrlPrefix(prefix?: string): void;
    setServiceDefaultHeader(header?: string): void;
    setSelectedServiceUrl(url?: string): void;
    setProxySettingsYamlContent(content?: object): void;
    setSettingFonts(content?: Array<IFontSettings>, isSourceFromPath?: boolean): void;
    setLocalProxyOnClient(content: boolean): void;
    setBackEndInfHeaders(backendInf: any): void;
    setRegionalDefinition(regionalSettings: Array<IRegionalDefinition> | undefined): void;
    setGlobalLR(regionalSettings: Array<IRegionalDefinition> | undefined): void;
    setEnvironment(env: any): void;
    setYamlLogType(logType: string): void;
    setPageTitle(title: string): void;
    setFavicon(favicon: string): void;
    getUXManager(): UXManagerImpl;
    migrateLegacySettings(settings: any): IWebSDKSettings;
}
//# sourceMappingURL=WebSDK.d.ts.map