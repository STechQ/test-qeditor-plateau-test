import { RoundedRectangle } from "two.js/src/shapes/rounded-rectangle";
import { Group } from "two.js/src/group";
import { Shape } from "two.js/src/shape";
import { IPoint } from "../../../flowInterfaces/editor/shape/IPoint";
import { ZuiManager } from "../managers/zuiManager";
export interface ITwoGroup extends Group {
    renderer: ITwoRenderer;
}
export interface ITwoRenderer {
    elem?: SVGElement;
}
export type IconHitOptions = {
    iconSvg: string;
    x: number;
    y: number;
    iconSize?: number;
    hitWidth?: number;
    hitHeight?: number;
    hitRadius?: number;
    cursor?: string;
    readonly?: boolean;
    onClick?: (e: MouseEvent) => void;
    onMouseDown?: (e: MouseEvent) => void;
};
export type IconHitHandle = {
    icon?: Group;
    hit: RoundedRectangle;
};
export type InteractiveDropdownItem = {
    text: string;
    mousedown: () => void;
};
export declare class DrawHelper {
    private static menu;
    static GetRenderer(shape: Shape, cb: (renderer: ITwoRenderer) => void, counter?: number): void;
    static CreateInteractiveDropdownMenu(point: IPoint, items: Array<InteractiveDropdownItem>): void;
    static RemoveInteractiveDropdown(): void;
    static createIconWithHit(zuiManager: ZuiManager, opts: IconHitOptions): IconHitHandle;
}
//# sourceMappingURL=drawHelper.d.ts.map