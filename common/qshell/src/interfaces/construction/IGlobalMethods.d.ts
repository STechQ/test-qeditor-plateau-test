import { IContextItem } from "../../../../shrimp/context";
import { LogType } from "../../../../shrimp/helpers/logger";
import { ElementLocation } from "../../../../shrimp/interfaces/ComponentInterfaces/ElementLocation";
import { AlertType, ErrorSource, IActionButton } from "../../../../shrimp/interfaces/ComponentInterfaces/IAlert";
import { IComponent } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponent";
import { IComponentCollection } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IAlertParameters } from "../../../../shrimp/interfaces/quick/IShellGlobalMethods";
import { IDomElement } from "../../../../shrimp/interfaces/RenderingInterfaces/IDomElement";
import { IRenderer } from "../../../../shrimp/interfaces/RenderingInterfaces/IRenderer";
import { ILocationPosition } from "../../../../shrimp/interfaces/quick/ILocationPosition";
import { IExcel, IExcelList } from "../../../../shrimp/interfaces/quick/IExcel";
export declare const GlobalMethodsContextName: string;
/**
 * QShell CreateRenderer (known types, used inside engine equivalent of GO like stuff)
 */
export interface IGlobalMethods extends IContextItem {
    alertDisplayCb?: (elem: Array<IDomElement>) => void;
    alert?: (options: {
        title?: string;
        text?: string;
        category?: keyof typeof AlertType;
        actionButtons?: Array<IActionButton>;
        error?: {
            errorMessage?: string;
            errorCode?: string;
            errorSource?: keyof typeof ErrorSource;
        };
        additionals?: {
            props?: any;
            events?: any;
        };
    }, parameters: IAlertParameters) => void;
    performance?: () => number;
    getDeepLinkParams: () => Record<string, string | undefined>;
    dynamicCompHandler: ({ createdComps, compLocater, referenceComp, parentCollection, appendToChild, childName, }: {
        createdComps: Array<IComponentCollection>;
        compLocater: ElementLocation;
        referenceComp?: IComponentCollection;
        parentCollection?: IComponentCollection;
        appendToChild?: boolean;
        childName: string;
    }) => void;
    deleteComponent: (compCollection: IComponentCollection | IDomElement) => void;
    setPageTitle(value: string): void;
    copyToClipboard(value: string): void;
    getCurrentPosition?: () => Promise<ILocationPosition> | undefined;
    getPageTitle?: () => void;
    getFavicon?: () => void;
    exportToXlsxHandler?: (excelFile: IExcel | IExcelList) => void;
    setComponentClass?: (compCollection: IComponentCollection, classes: Array<string>) => void;
    setComponentsProperty?: (compCollection: IComponentCollection, propertyName: string, propertyValue: string) => void;
    goNative?: ({ code, param, }: {
        code: string;
        param?: Record<string, any>;
    }) => void;
    setRenderer?: (renderer: IRenderer) => void;
    clearPageClose?: () => void;
    setPageClose?: () => void;
    scrollIntoView?: (component: IComponent) => void;
    YOffset?: () => Number;
    XOffset?: () => Number;
    toTop?: () => void;
    getEnvironmentVariable?: () => unknown;
    getYamlLogType?: () => LogType;
    setEnvironment?: (env: unknown) => void;
    setYamlLogType?: (logType: string) => void;
    getMinEngineLogType?: () => LogType | undefined;
    downloadHandler?: (responseFile: {
        data: string;
        name: string;
    }) => boolean;
    getComponent?: ({ compID }: {
        compID: string;
    }) => IDomElement;
    listenNetworkConnection?: () => void;
    getNetworkConnection?: () => boolean;
}
//# sourceMappingURL=IGlobalMethods.d.ts.map