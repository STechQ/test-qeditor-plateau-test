import { IPoint } from "../../../flowInterfaces/editor/shape/IPoint";
import { ObjectManager } from "../managers/objectManager";
import { ZuiManager, StageType } from "../managers/zuiManager";
import { Shape } from "two.js/src/shape";
import { Vector } from "two.js/src/vector";
import { ITwoGroup } from "../helper/drawHelper";
import { EventHelper } from "../helper/eventHelper";
import { FlowEvents } from "../../types";
interface IFlowObjectData {
    type: FlowObjectBase["type"];
    id: string;
}
export type MouseDownReturn = {
    handled: false;
} | {
    handled: true;
    selecteds: Array<FlowObjectBase>;
};
export declare abstract class FlowObjectBase {
    readonly ID: string;
    protected readonly objectManager: ObjectManager;
    protected readonly zuiManager: ZuiManager;
    protected readonly eventHelper: EventHelper<FlowEvents>;
    static GetFlowObjectData(element: SVGElement): IFlowObjectData | undefined;
    protected root: ITwoGroup;
    abstract type: "step" | "connection" | "swimlane" | "operator";
    protected abstract stageType: StageType;
    constructor(ID: string, objectManager: ObjectManager, zuiManager: ZuiManager, eventHelper: EventHelper<FlowEvents>);
    draw(): void;
    deleted(): void;
    drawSelectionOverlay(): void;
    abstract mouseDown(surfacePoint: IPoint): MouseDownReturn;
    protected abstract createSelectionOverlay(): Array<Shape>;
    abstract moveBy(dVector: Vector, surfacePoint: IPoint): void;
    abstract mouseUp(): void;
    protected abstract onDeleted(): void;
    abstract reDraw(): void;
}
export {};
//# sourceMappingURL=flowObjectBase.d.ts.map