import { Shape } from "two.js/src/shape";
import { IPoint } from "../../../flowInterfaces/editor/shape/IPoint";
import { ObjectManager } from "../managers/objectManager";
import { FlowObjectBase, MouseDownReturn } from "./flowObjectBase";
import { FlowStep } from "./flowStep";
import { Vector } from "two.js/src/vector";
import { StageType, ZuiManager } from "../managers/zuiManager";
import { FlowEvents } from "../../types";
import { EventHelper } from "../helper/eventHelper";
export declare type FlowConnectionTo = {
    type: "step";
    step: FlowStep;
    input: string;
} | {
    type: "point";
    surfacePoint: IPoint;
};
export declare type FlowConnectionFrom = {
    step: FlowStep;
    output: string;
};
export declare class FlowConnection extends FlowObjectBase {
    readonly from: FlowConnectionFrom;
    private _to;
    readonly type = "connection";
    protected readonly stageType: StageType;
    private line?;
    private prevTo;
    private events;
    constructor(id: string, from: FlowConnectionFrom, _to: FlowConnectionTo, objectManager: ObjectManager, zuiManager: ZuiManager, eventHelper: EventHelper<FlowEvents>);
    get to(): FlowConnectionTo;
    private set to(value);
    mouseDown(surfacePoint: IPoint): MouseDownReturn;
    protected createSelectionOverlay(): Shape[];
    moveBy(dVector: Vector, surfacePoint: IPoint): void;
    mouseUp(): void;
    protected onDeleted(): never[];
    reDraw(): void;
    private createFromTo;
    private registerToStep;
    private unregisterToStep;
    private registerFromStep;
    private unregisterFromStep;
    private mouseEnter;
    private mouseLeave;
}
//# sourceMappingURL=flowConnection.d.ts.map