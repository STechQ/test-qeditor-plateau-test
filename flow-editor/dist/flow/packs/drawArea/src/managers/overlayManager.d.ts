import { Context } from "../core/context";
export declare class OverlayManager {
    private readonly zuiManager;
    private readonly objectManager;
    private bottomOverlayDiv;
    private zoomGroup;
    private zoomOutBtn;
    private zoomInBtn;
    private centerBtn;
    constructor(context: Context, zuiManager?: import("./zuiManager").ZuiManager, objectManager?: import("./objectManager").ObjectManager);
    private centerBtnClick;
    private zoomButtonClick;
    private createSvgIcon;
}
//# sourceMappingURL=overlayManager.d.ts.map