import { IPlateauUIOptions } from "@stechquick/algae/lib/quick/IPlateauUI";
import { IDomElement } from "../../common/shrimp/interfaces/RenderingInterfaces/IDomElement";
import { IDoryRenderer } from "../../common/shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IPlateauIAM } from "../../common/shrimp/interfaces/quick/IPlateauIAM";
import { IWebSDK } from "../../common/shrimp/interfaces/quick/IWebSDK";
import { LivePreviewManager } from "./src/managers/LivePreviewManager";
declare class PlateauUI {
    private container;
    private renderer;
    mountPoint: HTMLElement;
    private sdkInstance;
    constructor(container: WebsdkContainer, renderer: IDoryRenderer, mountPoint: IDomElement, sdkInstance: IWebSDK);
    open(qjsonPath?: string, args?: Record<string, any>): Promise<void>;
    show(): void;
    hide(): void;
    close(): void;
    destroy(): void;
    trigger({ eventName, parameters }: {
        eventName: string;
        parameters: Record<string, any>;
    }): any;
}
declare class WebsdkContainer {
    private enviromentInfo;
    private settingsWeb?;
    private assetList?;
    private SDKInstance?;
    private SDKSettings?;
    private SDKConfiguration?;
    mountPoint?: IDomElement;
    PlateauIAM: IPlateauIAM | undefined;
    private PlateauUIOptions;
    lpManager?: LivePreviewManager;
    private initCompleted;
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
    private setSettingsQJsons;
    private LoadObject;
    private LoadJS;
    private LoadQjson;
    private configureLivePreview;
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