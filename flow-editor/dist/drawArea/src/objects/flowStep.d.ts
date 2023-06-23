import { IPoint } from "../../../flowInterfaces/editor/shape/IPoint";
import { Circle } from "two.js/src/shapes/circle";
import { FlowObjectBase, MouseDownReturn } from "./flowObjectBase";
import { ObjectManager } from "../managers/objectManager";
import { Vector } from "two.js/src/vector";
import { StageType, ZuiManager } from "../managers/zuiManager";
import { FlowEvents, IFlowStepOptions } from "../../types";
import { FlowConnection } from "./flowConnection";
import { EventHelper } from "../helper/eventHelper";
declare type GetPositionOptions = {
    type: "self";
} | {
    type: "input" | "output";
    name: string;
};
export declare class FlowStep extends FlowObjectBase {
    readonly stepName: string;
    private readonly rectangle;
    private readonly text;
    private outputs;
    private inputs;
    private inputConns;
    private outputConns;
    private outputsOrdered;
    private inputsOrdered;
    readonly type = "step";
    protected readonly stageType: StageType;
    constructor(id: string, stepName: string, surfacePoint: IPoint, options: IFlowStepOptions, objectManager: ObjectManager, zuiManager: ZuiManager, eventHelper: EventHelper<FlowEvents>);
    get Options(): IFlowStepOptions;
    mouseDown(surfacePoint: IPoint): MouseDownReturn;
    protected createSelectionOverlay(): Circle[];
    moveBy(dVector: Vector, surfacePoint: IPoint): void;
    mouseUp(): void;
    protected onDeleted(): void;
    reDraw(): void;
    private reDrawOutConns;
    getPosition(option: GetPositionOptions): Vector;
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
    private drawIOs;
    private afterDraw;
    private applyStyle;
    private colorOutputs;
    setOutputs(outputs: Array<string>): void;
}
export {};
//# sourceMappingURL=flowStep.d.ts.map