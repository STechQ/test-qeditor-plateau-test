import { Group } from "two.js/src/group";
import { Shape } from "two.js/src/shape";
import { IPoint } from "../../../flowInterfaces/editor/shape/IPoint";
export interface ITwoGroup extends Group {
    renderer: ITwoRenderer;
}
export interface ITwoRenderer {
    elem?: SVGElement;
}
export declare type DeleteCircleHandle = {
    root: Group;
    onMouseDown: () => void;
};
export declare class DrawHelper {
    static GetRenderer(shape: Shape, cb: (renderer: ITwoRenderer) => void, counter?: number): void;
    static CreateDeleteCircle(point: IPoint, onMouseDown: () => void): DeleteCircleHandle;
    static RemoveDeleteCircle(handle: DeleteCircleHandle): void;
}
//# sourceMappingURL=drawHelper.d.ts.map