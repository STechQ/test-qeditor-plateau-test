import { IGlobalMethods } from "../../../../common/qshell";
import { ElementLocation } from "../../../../common/shrimp/interfaces/ComponentInterfaces/ElementLocation";
import { AlertType, ErrorSource, IActionButton } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IAlert";
import { IComponent } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IComponent";
import { IComponentCollection } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IAlertParameters } from "../../../../common/shrimp/interfaces/quick/IShellGlobalMethods";
import { IWebSDKSettingsWrapper } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
import { IDomElement } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IDomElement";
import { IRenderer } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IRendererConfig } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IRendererConfig";
import { ILocationPosition } from "../../../../common/shrimp/interfaces/quick/ILocationPosition";
import { IExcel, IExcelList } from "../../../../common/shrimp/interfaces/quick/IExcel";
export declare class GlobalMethodsImpl implements IGlobalMethods {
    contextName: string;
    parentInstance: any;
    private config?;
    private errorContainerTarget;
    static renderer?: IRenderer;
    static onCloseIsActive: Boolean;
    static settingsWrapper: IWebSDKSettingsWrapper;
    constructor({ contextName, parentInstance, config, errorContainerTarget, settingsWrapper, }: {
        contextName: string;
        parentInstance: any;
        config?: IRendererConfig;
        errorContainerTarget: IDomElement;
        settingsWrapper: IWebSDKSettingsWrapper;
    });
    setRenderer(renderer: any): void;
    alert(options: {
        title?: string;
        text?: string;
        category?: keyof typeof AlertType;
        actionButtons?: Array<IActionButton>;
        error?: {
            errorMessage?: string;
            errorCode?: string;
            errorSource?: keyof typeof ErrorSource;
        };
    }, parameters: IAlertParameters): void;
    private createAlert;
    private static createLabelComp;
    performance(): number;
    getDeepLinkParams(): Record<string, string | undefined>;
    dynamicCompHandler({ createdComps, compLocater, parentCollection, childName, }: {
        createdComps: Array<IComponentCollection>;
        compLocater: ElementLocation;
        parentCollection?: IComponentCollection;
        childName: string;
    }): void;
    /**
     * Place the new created component dom element in the page.
     * If it' s editor page, it will not be rendered. It might be rendered at the end of page, but it brokes the page layout
     * @param createdComp New component dom element
     * @param parentComp Reference component dom element. If it is now exit, new comp will be append as a last child
     * @param location Indicates the new component will be placed
     */
    private static decideCompLocation;
    deleteComponent(compCollection: IComponentCollection | IDomElement): void;
    setPageTitle(value: string): void;
    copyToClipboard(value: string): void;
    getCurrentPosition(): Promise<ILocationPosition>;
    setFavicon(favicon: string): void;
    exportToXlsxHandler(excelFile: IExcel | IExcelList): void;
    downloadHandler(responseFile: {
        data: string;
        name: string;
    }): any;
    setComponentClass(compCollection: IComponentCollection, classes: Array<string>): void;
    setComponentsProperty(componentCollection: IComponentCollection, propertyName: string, propertyValue: any): void;
    clearPageClose(): void;
    setPageClose(): void;
    listenNetworkConnection(): void;
    getNetworkConnection(): boolean;
    scrollIntoView(component: IComponent): void;
    YOffset(): number;
    XOffset(): number;
    toTop(): void;
    getEnvironmentVariable(): unknown;
    setEnvironment(env: unknown): void;
    getYamlLogType(): any;
    setYamlLogType(logType: string): void;
    getPageTitle(): string | undefined;
    getFavicon(): string | undefined;
    getMinEngineLogType(): any;
    getComponent({ compID }: {
        compID: string;
    }): IDomElement;
}
//# sourceMappingURL=GlobalMethodsImpl.d.ts.map