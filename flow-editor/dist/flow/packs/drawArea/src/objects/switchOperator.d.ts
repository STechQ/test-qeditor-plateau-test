import { IPoint } from "@stechquick/flow-interfaces/editor/shape/IPoint";
import { Shape } from "two.js/src/shape";
import { Vector } from "two.js/src/vector";
import { FlowEvents } from "../../types";
import { EventHelper } from "../helper/eventHelper";
import { ObjectManager } from "../managers/objectManager";
import { StageType, ZuiManager } from "../managers/zuiManager";
import { FlowObjectBase, MouseDownReturn } from "./flowObjectBase";
export interface IOperatorPoint {
    x: number;
    y1: number;
    y2: number;
}
export declare class SwitchOperator extends FlowObjectBase {
    readonly type = "operator";
    protected readonly stageType: StageType;
    private readonly rectangle;
    private readonly text;
    private readonly line;
    private readonly group;
    constructor(id: string, point: IOperatorPoint, text: string, objectManager: ObjectManager, zuiManager: ZuiManager, eventHelper: EventHelper<FlowEvents>);
    mouseDown(surfacePoint: IPoint): MouseDownReturn;
    protected createSelectionOverlay(): Shape[];
    moveBy(dVector: Vector, surfacePoint: IPoint): void;
    mouseUp(): void;
    protected onDeleted(): never[];
    reDraw(): void;
}
//# sourceMappingURL=switchOperator.d.ts.map