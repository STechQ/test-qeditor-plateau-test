import { IMessage, LogType } from "../../../shrimp/helpers/logger";
import { ElementLocation } from "../../../shrimp/interfaces/ComponentInterfaces/ElementLocation";
import { IComponent, IComponentClassEngine } from "../../../shrimp/interfaces/ComponentInterfaces/IComponent";
import { IComponentCollection } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IComponentInstanceTracker } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentInstanceTracker";
import { IVnode } from "../../../shrimp/interfaces/ComponentInterfaces/IVnode";
import { IDictionary } from "../../../shrimp/interfaces/IDictionary";
import { IHostResponseData } from "../../../shrimp/interfaces/IHostResponseData";
import { INetwork } from "../../../shrimp/interfaces/quick/IContainerServices";
import { ICookieAccess } from "../../../shrimp/interfaces/quick/ICookieAccess";
import { IFormatConfiguration } from "../../../shrimp/interfaces/quick/IFormatConfiguration";
import { IFormattingDefinition } from "../../../shrimp/interfaces/quick/IFormattingDefinition";
import { IPlatform } from "../../../shrimp/interfaces/quick/IPlatform";
import { IProcessManager } from "../../../shrimp/interfaces/quick/IProcessManager";
import { IHistoryBasedShellConfiguration, IShellConfiguration } from "../../../shrimp/interfaces/quick/IShellConfiguration";
import { IShellGlobalMethods } from "../../../shrimp/interfaces/quick/IShellGlobalMethods";
import { IStore } from "../../../shrimp/interfaces/quick/IStore";
import { IUrlOptions } from "../../../shrimp/interfaces/quick/IUrl";
import { ILocationPosition } from "../../../shrimp/interfaces/quick/ILocationPosition";
import { IExcel } from "../../../shrimp/interfaces/quick/IExcel";
export declare class ShellConfiguration implements IShellConfiguration {
    network: INetwork;
    lridHelper?: (label: string, dataSource?: object | null) => string;
    go?: Function;
    go2?(qjsonPath: string, options?: {
        newTab?: boolean;
        store?: boolean;
    }): void;
    goNative?: Function;
    triggerPreviousPage?: Function;
    nemoComponents?: object;
    storeAccess?: IStore;
    cookieAccess?: ICookieAccess;
    platform?: IPlatform;
    getCurrentPosition?: () => Promise<ILocationPosition>;
    compPropsAutoLrid?: boolean;
    osGlobalObjects?: IDictionary<any>;
    shellGlobalMethods?: IShellGlobalMethods;
    formatConfiguration: IFormatConfiguration;
    componentInstanceTracker?: IComponentInstanceTracker;
    historyBasedConf?: IHistoryBasedShellConfiguration;
    processManager?: IProcessManager;
    logHandler?: {
        timer: number;
        cb: (logs: IMessage) => void;
        clear: () => void;
    };
    coreComponentOverrider?(componentName: string): IComponentClassEngine | null;
    dynamicCompHandler?: ({ createdComps, referenceComp, compLocater, parentCollection, append, childName }: {
        createdComps?: Array<IComponentCollection>;
        referenceComp?: IComponentCollection;
        compLocater: ElementLocation;
        parentCollection?: IComponentCollection;
        append?: boolean;
        childName: string;
    }) => void;
    deleteComponent?: (compCollection: IComponentCollection) => void;
    resetTimeTextField?: (componentContext: any) => void;
    roleBaseViewHelper?: (key: string) => boolean;
    redirectTo?({ url }: {
        url: string;
    }): void;
    performance?: () => number;
    getUrl?(options?: {
        noQueryString?: boolean;
    }): string | undefined;
    exportToXlsxHandler?: (excelFile: IExcel) => void;
    setComponentClass?: (compCollection: IComponentCollection, classes: Array<string>) => void;
    setTheme?: (newTheme: string) => void;
    getThemeList?: () => Array<string> | undefined;
    addTheme?: (themeName: string) => void;
    removeTheme?: (themeName: string) => void;
    redirect?({ url, options }: {
        url: string;
        options?: IUrlOptions;
    }): void;
    setVisibility: (compCollection: IComponentCollection, compVisibility: boolean) => void;
    getComponentValue: (compCollection: IComponentCollection) => any;
    setComponentValue: (compCollection: IComponentCollection, value: string) => void;
    getComponentStyle: (comp: IComponent) => any;
    setComponentStyle: (compCollection: IComponentCollection, prop?: string, value?: string) => void;
    setComponentsProperty?: (componentCollection: IComponentCollection, propertyName: string, propertyValue: any) => void;
    setRegion?: (regionName: string) => void;
    getRegionList?: () => Array<string> | undefined;
    getCurrentRegion?: () => string | undefined;
    getFormattingDefinitionByCurrentRegion?: () => IFormattingDefinition | undefined;
    onComponentDestroy?: ({ parentComponent, childVDomElement, childKey }: {
        parentComponent: IComponent;
        childVDomElement: IVnode;
        childKey: string;
    }) => void;
    createComponentQValue?: (compCOllection: IComponentCollection) => void;
    hostTrigger?: (functionName: string, params: Record<string, any>, pageNameArray: Array<string>) => Promise<IHostResponseData>;
    setDarkTheme?: (compCollection: IComponentCollection, isDark: boolean) => void;
    clearPageClose?: () => void;
    setPageClose?: () => void;
    scrollIntoView?: (component: IComponent) => void;
    YOffset?: () => Number;
    XOffset?: () => Number;
    toTop?: () => void;
    getEnvironmentVariable?: () => any;
    getPageTitle?: () => void;
    getFavicon?: () => void;
    setPageTitle: (value: string) => void;
    copyToClipboard: (value: string) => void;
    setFavicon: (icon: string) => void;
    getYamlLogType?: () => LogType;
    cryptoGenerateKeyPair?: () => Record<string, string>;
    cryptoStore?: (keyPair: Record<string, string>) => void;
    cryptoSha512?: (value: string) => string;
    cryptoSign?: (value: string, privateKey: string, options?: {
        digestAlgorithm: string | "sha512";
        padding: string | "pkcs15";
    }) => string;
    getMinEngineLogType?: () => LogType | undefined;
    downloadHandler?: (responseFile: {
        data: string;
        name: string;
    }) => boolean;
    constructor();
}
//# sourceMappingURL=ShellConfiguration.d.ts.map