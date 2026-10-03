import { Context } from "../core/context";
export declare class OverlayManager {
    private readonly zuiManager;
    private readonly objectManager;
    private bottomOverlayDiv;
    private zoomGroup;
    private zoomOutBtn;
    private zoomInBtn;
    /**
     * Hides every connection label — branch names and switch case names — so a dense model can be
     * read as pure structure. Purely a view toggle; nothing is written to the model.
     */
    private labelsVisible;
    private labelToggleBtn;
    private centerBtn;
    constructor(context: Context, zuiManager?: import("./zuiManager").ZuiManager, objectManager?: import("./objectManager").ObjectManager);
    private toggleLabels;
    private renderLabelToggleIcon;
    private centerBtnClick;
    private zoomButtonClick;
    private createSvgIcon;
}
//# sourceMappingURL=overlayManager.d.ts.map