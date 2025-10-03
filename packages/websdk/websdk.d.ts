import { IPlateauUIOptions } from "@stechquick/algae/lib/quick/IPlateauUI";
import { IDomElement } from "../../common/shrimp/interfaces/RenderingInterfaces/IDomElement";
import { IDoryRenderer } from "../../common/shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IPlateauIAM } from "../../common/shrimp/interfaces/quick/IPlateauIAM";
import { IWebSDK } from "../../common/shrimp/interfaces/quick/IWebSDK";
import { LivePreviewManager } from "./src/managers/LivePreviewManager";
declare class PlateauUI implements IPlateauUI {
    private container;
    private renderer;
    mountPoint: HTMLElement;
    private sdkInstance;
    constructor(container: WebsdkContainer, renderer: IDoryRenderer, mountPoint: IDomElement, sdkInstance: IWebSDK);
    open(qjsonPath?: string, args?: Record<string, any>): Promise<void>;
    show(args?: plateauUIPageOptions): void;
    hide(args?: plateauUIPageOptions): void;
    close(args?: plateauUIPageOptions): Promise<void>;
    destroy(args?: Record<string, any>): Promise<void>;
    trigger({ eventName, parameters }: {
        eventName: string;
        parameters: Record<string, any>;
    }): any;
    triggerPipeline({ eventName, parameters }: {
        eventName: string;
        parameters: Record<string, any>;
    }): Promise<any> | undefined;
    getGlobalStore(storeFieldName: string): any;
}
export interface IPlateauUI {
    open(qjsonPath?: string, args?: Record<string, any>): Promise<void>;
    show(args?: plateauUIPageOptions): void;
    hide(args?: plateauUIPageOptions): void;
    close(args?: plateauUIPageOptions): Promise<void>;
    destroy(args?: plateauUIPageOptions): Promise<void>;
}
export declare type plateauUIPageOptions = {
    pageName: string;
};
export interface IContainerServiceParams {
    plateauUIRenderer?: PlateauUI;
}
declare class WebsdkContainer {
    private enviromentInfo;
    private settingsWeb?;
    private assetList?;
    private appSettings?;
    private SDKInstance?;
    private SDKSettings?;
    private SDKConfiguration?;
    mountPoint?: IDomElement;
    PlateauIAM: IPlateauIAM | undefined;
    private PlateauUIOptions;
    lpManager?: LivePreviewManager;
    private initCompleted;
    private containerServicesParameter;
    constructor();
    init({ PlateauUIOptions, environmentInfo }: {
        PlateauUIOptions?: IPlateauUIOptions;
        environmentInfo?: string;
    }): Promise<void>;
    createRenderer({ mountPoint }: {
        mountPoint: HTMLElement;
    }): Promise<PlateauUI>;
    destroy(): void;
    private initLoadingComponent;
    open({ renderer, qjsonPath, args }: {
        renderer: IDoryRenderer;
        qjsonPath?: string;
        args?: Record<string, any>;
    }): Promise<void>;
    private handleIAMSettings;
    private setSDKConfig;
    private setSettingModels;
    private LoadObject;
    private LoadJS;
    private LoadQjson;
    private configureLivePreview;
    private getBuildVersion;
    private registerServiceWorker;
    onSWMessage(packId: any): Promise<void>;
    sendMessage(msg: any): void;
}
declare function init(PlateauUIOptions?: IPlateauUIOptions, environmentInfo?: string): Promise<WebsdkContainer>;
declare function createRenderer({ mountPoint }: {
    mountPoint: IDomElement;
}): Promise<PlateauUI>;
declare function destroy(): void;
export { createRenderer, init, destroy };
//# sourceMappingURL=websdk.d.ts.map