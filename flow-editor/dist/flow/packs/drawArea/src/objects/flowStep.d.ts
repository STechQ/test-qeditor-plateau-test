import { IPoint } from "../../../flowInterfaces/editor/shape/IPoint";
import { RoundedRectangle } from "two.js/src/shapes/rounded-rectangle";
import { Text } from "two.js/src/text";
import { Circle } from "two.js/src/shapes/circle";
import { FlowObjectBase, MouseDownReturn } from "./flowObjectBase";
import { ObjectManager } from "../managers/objectManager";
import { Vector } from "two.js/src/vector";
import { StageType, ZuiManager } from "../managers/zuiManager";
import { FlowEvents, IFlowStepOptions, IFlowStepProps } from "../../types";
import { FlowConnection } from "./flowConnection";
import { EventHelper } from "../helper/eventHelper";
import { Path } from "two.js/src/path";
type GetPositionOptions = {
    type: "self" | "group" | "bounding";
} | {
    type: "input" | "output";
    name: string;
};
type StepShapeInfo = {
    rectangle?: boolean;
    circle?: boolean;
    rhombus?: boolean;
    gateway?: boolean;
    width: number;
    height: number;
};
export declare class FlowStep extends FlowObjectBase {
    readonly stepName: string;
    private readonly container;
    private readonly name;
    private readonly labelInfo;
    private readonly descriptionInfo;
    private readonly iconInfo;
    private readonly swimlaneInfo;
    private readonly group;
    private readonly textWidthCalculator;
    private shapeInfo;
    private outputs;
    private inputs;
    private inputConns;
    private outputConns;
    private outputsOrdered;
    private inputsOrdered;
    private swimlaneId?;
    private label;
    private description;
    private errors;
    private baseFill;
    private baseStroke;
    private baseLinewidth;
    private isErroneous;
    private isHovered;
    private readonly allowsMultipleOutputConnections;
    private badgeInfo?;
    private modeMarker?;
    private pairCountsText?;
    readonly type = "step";
    protected readonly stageType: StageType;
    constructor(id: string, stepName: string, surfacePoint: IPoint, options: IFlowStepOptions, objectManager: ObjectManager, zuiManager: ZuiManager, eventHelper: EventHelper<FlowEvents>, props?: IFlowStepProps);
    private getLabelMaxWidth;
    private createSwimlaneText;
    private createSwimlaneContainer;
    private createDescription;
    private createLabel;
    private createIcon;
    private createBar;
    /** Square body of a parallel gateway — same colours as every other box; the marker glyph and the label name it. */
    createGatewayContainer(x: number, y: number): RoundedRectangle;
    private createGatewayMarker;
    private createRectangleContainer;
    createCircleContainer(x: number, y: number): Circle;
    createRhombusContainer(x: number, y: number): Path;
    get Options(): IFlowStepOptions;
    get SwimlaneId(): string | undefined;
    get Label(): string | undefined;
    get Description(): string;
    get Errors(): Array<string> | undefined;
    get ShapeInfo(): StepShapeInfo | undefined;
    getAvailableOutputs(currentConn?: FlowConnection, currentOutput?: string): Array<string>;
    setSwimlaneId(swimlaneId?: string): void;
    mouseDown(surfacePoint: IPoint): MouseDownReturn;
    /**
     * A gateway never appears selected alone: its pair gets the same border, purely visually —
     * the actual selection stays on the clicked step, so dragging and deleting act on that one
     * alone. `skipPair` breaks the mutual recursion between the two halves.
     */
    drawSelectionOverlay(isErroneous?: boolean, skipPair?: boolean): void;
    protected createSelectionOverlay(isErroneous?: boolean): Path[];
    private getBorder;
    moveBy(dVector: Vector, surfacePoint: IPoint): void;
    mouseUp(): void;
    protected onDeleted(): void;
    reDraw(): void;
    private reDrawOutConns;
    getPosition(option: GetPositionOptions): any;
    closestInput(surfacePoint: IPoint, discardInputs?: Array<string>): {
        input: string;
        distSq: number;
    } | undefined;
    unregisterConnection(conType: "input" | "output", name: string, connection: FlowConnection): void;
    registerConnection(conType: "input" | "output", name: string, connection: FlowConnection): void;
    getConnectionTo(output: string, toStep: FlowStep, toInput: string): FlowConnection | undefined;
    getConnectionsTo(output: string, toStep: FlowStep): Array<FlowConnection>;
    private drawInputs;
    private drawOutputs;
    changeOutputName(oldName: string, newName: string): void;
    private drawRhombusOutputs;
    private drawIOs;
    private bringShapeToFront;
    private trackHover;
    private afterDraw;
    colorIO(outputName: string, conType: "input" | "output", color?: string): void;
    setOutputs(outputs: Array<string>): void;
    setLabel(label: string): void;
    setDescription(description: string): void;
    setErrors(errors: Array<string>): void;
    setContainerColor(bgColor: string, borderColor: string): void;
    setErrorHighlight(isErroneous: boolean): void;
    setHoverHighlight(hovered: boolean): void;
    private applyContainerStyle;
    setBadge(badge: string): void;
    setPairCounts(counts: string): void;
    setModeMarker(mode: "parallel" | "sequential" | undefined): void;
    getCenterPoint(): IPoint;
    truncateTextToFit(text: Text, content: string, maxWidth: number): void;
    changeStepID(newId: string): void;
}
export {};
//# sourceMappingURL=flowStep.d.ts.map