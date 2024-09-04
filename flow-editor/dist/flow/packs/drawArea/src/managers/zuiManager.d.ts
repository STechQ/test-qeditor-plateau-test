import { Group } from "two.js/src/group";
import { IPoint } from "../../../flowInterfaces/editor/shape/IPoint";
import { IRect } from "../../../flowInterfaces/editor/shape/IRect";
import { SelectionManager } from "./selectionManager";
import { IFlowState } from "../../../flowInterfaces/editor/IFlowEditorState";
import { Context } from "../core/context";
export type StageType = "connection" | "step" | "selection" | "swimlane" | "operator";
export type ResizeSubscriber = (rect: IRect) => void;
export declare class ZuiManager {
    private readonly selectionManager;
    private readonly eventHelper;
    private readonly resizeTracker;
    private readonly resizeSubscribers;
    readonly selfElement: HTMLDivElement;
    private readonly selectionStage;
    private readonly mainStage;
    private readonly stepStage;
    private readonly swimlaneStage;
    private readonly connectionStage;
    private readonly operatorStage;
    private readonly two;
    private readonly zui;
    constructor(context: Context, selectionManager?: SelectionManager, eventHelper?: import("../helper/eventHelper").EventHelper<import("../../types").FlowEvents>);
    attach(element: HTMLElement): void;
    detach(): void;
    clientToSurface(position: IPoint): IPoint;
    clientToSurfaceD(d: number): number;
    clientToSurfaceDiff(dx: number, dy: number): {
        dx: number;
        dy: number;
    };
    addToStage(stage: StageType, group: Group): void;
    panBy(dx: number, dy: number): void;
    clearStage(stage: "selection"): void;
    zoomBy(dy: number, clientPoint: IPoint): void;
    zoomSet(scale: number, clientX: number, clientY: number): void;
    reset(): void;
    getSelectionRect(): IRect;
    subscribeToResize(subscriber: ResizeSubscriber): void;
    getState(): IFlowState["surfaceMatrix"];
    setState(surfaceMatrix: IFlowState["surfaceMatrix"]): void;
    private resizeTo;
    private selectStage;
    interpret(svg: SVGElement): Group | undefined;
}
//# sourceMappingURL=zuiManager.d.ts.map