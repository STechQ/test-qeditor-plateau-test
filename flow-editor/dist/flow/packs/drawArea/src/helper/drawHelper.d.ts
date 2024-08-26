import { Group } from "two.js/src/group";
import { Shape } from "two.js/src/shape";
import { IPoint } from "../../../flowInterfaces/editor/shape/IPoint";
export interface ITwoGroup extends Group {
    renderer: ITwoRenderer;
}
export interface ITwoRenderer {
    elem?: SVGElement;
}
export type InteractiveDropdownHandle = {
    root: Group;
};
export type InteractiveDropdownItem = {
    text: string;
    mousedown: () => void;
};
export declare class DrawHelper {
    static GetRenderer(shape: Shape, cb: (renderer: ITwoRenderer) => void, counter?: number): void;
    static CreateInteractiveDropdownMenu(point: IPoint, items: Array<InteractiveDropdownItem>): InteractiveDropdownHandle;
    static RemoveInteractiveDropdown(handle: InteractiveDropdownHandle): void;
}
//# sourceMappingURL=drawHelper.d.ts.map