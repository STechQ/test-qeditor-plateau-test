import { IExternalQJsonRetriever } from "@stechquick/algae/lib/quick/IExternalQJsonRetriever";
import { IAppSettings } from "@stechquick/algae/lib/quick/IPlateauUI";
import { IComponent } from "../ComponentInterfaces/IComponent";
import { IVersion } from "../ComponentInterfaces/IVersion";
import { IDomElement } from "../RenderingInterfaces/IDomElement";
import { IRenderer } from "../RenderingInterfaces/IRenderer";
import { IRendererConfig } from "../RenderingInterfaces/IRendererConfig";
import { IConfig } from "./IConfig";
import { IContainerServices } from "./IContainerServices";
import { IRegionalDefinition } from "./IFormattingDefinition";
import { IUXManager } from "./IUXManager";
import { IWebSDKSetingsBus } from "./IWebSDKSettingsBus";
export interface IWebSDKSettingsWrapper {
    settings: IWebSDKSettings;
}
export interface IWebSDKSettings {
    qjsonURLPrefix?: string;
    serviceURL?: string;
    defaultServiceHeader?: string;
    selectedServiceUrl?: string;
    settingsProxyYaml?: object;
    qjsonDirectPath?: boolean;
    fileMap?: Array<{
        id: string;
        path: string;
        name: string;
        version: string;
    }>;
    disableBackManagement?: boolean;
    backendInf?: IBackendInf;
    regionalDefinition?: Array<IRegionalDefinition>;
    cssPath?: Array<string> | Record<string, Array<string>>;
    fontPath?: Array<IFontSettings>;
    enableClientCache?: boolean;
    serviceWorkerPath?: string;
    pipelineqjson?: string;
    alertqjson?: string;
    loadingqjson?: string;
    loadingfile?: string;
    globalLocalizationqjson?: string;
    rootqjson?: string;
    containerServicesPath?: string;
    componentListPath?: string;
    pipelineqjsonContent?: any;
    alertqjsonContent?: any;
    loadingqjsonContent?: any;
    globalLocalizationqjsonContent?: any;
    rootqjsonContent?: any;
    singleTab?: any;
    rootLangCode?: string;
    domainModuleList?: Record<string, string>;
    environment?: unknown;
    yamlLogType?: string;
    componentListURL?: string;
    disableRoute?: boolean;
    title?: string;
    favicon?: string;
    minEngineLogLevel?: string;
    versions?: IVersion;
    useLocalProxyOnClient?: boolean;
    configValues?: IConfig[];
    appSettings?: IAppSettings;
    disablePagePool?: boolean;
    blockFontRequest?: boolean;
}
export interface IFontSettings {
    id: string;
    fontName: string;
    fontWeights: Array<string> | number;
    path?: string;
    combinedFont?: string;
}
export interface IBackendInf {
    containerName?: any;
    isKibanaLogEnabled?: any;
    iam?: {
        active: boolean;
        options?: any;
    };
    Backend?: any;
    PredefinedBackendHeaders?: any;
    HeaderExceptionList?: any;
    Header?: any;
}
export interface IWebSDKCtor {
    new (settings: IWebSDKSettings, services?: IContainerServices): IWebSDK;
}
export declare enum CompGroupType {
    Vuetify = "Vuetify",
    DevExpress = "DevExpress",
    Sprinkle = "Sprinkle",
    Chart = "Chart",
    Local = "Local",
    GoldenLayout = "GoldenLayout"
}
export interface IWebSDK {
    CreateRenderer({ mountPoint, config }: {
        mountPoint: IDomElement;
        config?: IRendererConfig;
    }): IRenderer;
    GetParentInstance(renderer: IRenderer): any;
    GetDomContainer(renderer: IRenderer): IDomElement;
    Clear(renderer: IRenderer): void;
    setComponentOverrider(demandComponentCb: (compName: string) => IComponent | null): void;
    GetComponentList(compGroupNameArray: Array<CompGroupType>): Record<CompGroupType, any>;
    setQJsonUrlPrefix(prefix: string): void;
    setServiceUrlPrefix(prefix: string): void;
    setServiceDefaultHeader(header: string): void;
    setSelectedServiceUrl(url: string): void;
    setProxySettingsYamlContent(content: object): void;
    setLocalProxyOnClient(content: boolean): void;
    LoadModuleCompLists(modulePaths: Record<string, string>): Promise<any>;
    setRegionalDefinition(regionalSettings: Array<IRegionalDefinition> | undefined): void;
    setBackEndInfHeaders(backendInf: any): void;
    SetExternalQJsonRetriever(externalQJsonRetriever: IExternalQJsonRetriever): void;
    UpdateSettings(allSettings: IWebSDKSetingsBus): void;
    getUXManager(): IUXManager;
    setEnvironment(env: unknown): void;
    setYamlLogType(logType: string): void;
    migrateLegacySettings(settings: any): IWebSDKSettings;
}
//# sourceMappingURL=IWebSDK.d.ts.map