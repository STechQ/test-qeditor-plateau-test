import { IPlateauUIOptions } from "@stechquick/algae/lib/quick/IPlateauUI";
import { IDomElement } from "../../common/shrimp/interfaces/RenderingInterfaces/IDomElement";
import { IDoryRenderer } from "../../common/shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IPlateauIAM } from "../../common/shrimp/interfaces/quick/IPlateauIAM";
import { LivePreviewManager } from "./src/managers/LivePreviewManager";
declare class PlateauUI {
    private container;
    private renderer;
    mountPoint: HTMLElement;
    constructor(container: WebsdkContainer, renderer: IDoryRenderer, mountPoint: IDomElement);
    open(qjsonPath?: string, args?: Record<string, any>): void;
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
    constructor();
    init({ PlateauUIOptions, environmentInfo }: {
        PlateauUIOptions?: IPlateauUIOptions;
        environmentInfo?: string;
    }): Promise<void>;
    createRenderer({ mountPoint }: {
        mountPoint: HTMLElement;
    }): Promise<PlateauUI>;
    private initLoadingComponent;
    open({ renderer, qjsonPath, args }: {
        renderer: IDoryRenderer;
        qjsonPath?: string;
        args?: Record<string, any>;
    }): Promise<void>;
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
declare function init(PlateauUIOptions?: IPlateauUIOptions, environmentInfo?: string): Promise<WebsdkContainer | undefined>;
declare function createRenderer({ mountPoint }: {
    mountPoint: IDomElement;
}): Promise<PlateauUI>;
export { createRenderer, init };
//# sourceMappingURL=websdk.d.ts.map