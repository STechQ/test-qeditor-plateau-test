import { IRenderer } from "../../common/shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IDomElement } from "../../common/shrimp/interfaces/RenderingInterfaces/IDomElement";
import { LivePreviewManager } from "./src/managers/LivePreviewManager";
import { IPlateauUIOptions } from "@stechquick/algae/lib/quick/IPlateauUI";
declare class PlateauUI {
    private container;
    private renderer;
    mountPoint: HTMLElement;
    constructor(container: WebsdkContainer, renderer: IRenderer, mountPoint: IDomElement);
    open(qjsonPath?: string, args?: Record<string, any>): void;
    show(): void;
    hide(): void;
    close(): void;
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
    private PlateauIAM;
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
        renderer: IRenderer;
        qjsonPath?: string;
        args?: Record<string, any>;
    }): Promise<void>;
    private setSDKConfig;
    private setSettingsQJsons;
    private LoadObject;
    private LoadJS;
    private LoadQjson;
    private configureLivePreview;
}
declare function init(PlateauUIOptions?: IPlateauUIOptions, environmentInfo?: string): Promise<WebsdkContainer | undefined>;
declare function createRenderer({ mountPoint }: {
    mountPoint: IDomElement;
}): Promise<PlateauUI>;
export { init, createRenderer };
//# sourceMappingURL=websdk.d.ts.map