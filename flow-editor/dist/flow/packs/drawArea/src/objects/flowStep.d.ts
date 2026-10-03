import { IPoint } from "../../../flowInterfaces/editor/shape/IPoint";
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
    /** Base colours of the container, restored when the error highlight is cleared. */
    private baseFill;
    private baseStroke;
    private baseLinewidth;
    private isErroneous;
    private isHovered;
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
    /**
     * Accents the step while the cursor is over it, and tells the object manager what the pointer
     * is on so the canvas cursor can follow it.
     */
    private trackHover;
    private afterDraw;
    colorIO(outputName: string, conType: "input" | "output", color?: string): void;
    setOutputs(outputs: Array<string>): void;
    setLabel(label: string): void;
    setDescription(description: string): void;
    setErrors(errors: Array<string>): void;
    setContainerColor(bgColor: string, borderColor: string): void;
    /**
     * Paints the container red while the step has errors and restores its own base colours
     * otherwise, so shape-specific colouring survives an error coming and going.
     */
    setErrorHighlight(isErroneous: boolean): void;
    /** Accents the container's border while the cursor is over the step. */
    setHoverHighlight(hovered: boolean): void;
    /**
     * Single place the container's colours are decided. Hover only touches the border — the fill
     * stays whatever the step's state says it is, so it never competes with the erroneous tint.
     */
    private applyContainerStyle;
    truncateTextToFit(text: Text, content: string, maxWidth: number): void;
    changeStepID(newId: string): void;
}
export {};
//# sourceMappingURL=flowStep.d.ts.map