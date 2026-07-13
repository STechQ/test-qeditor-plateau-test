import { IVnode } from "../interfaces/ComponentInterfaces/IVnode";
export interface IStyle {
    paddingLeft?: string;
    marginLeft?: string;
    top?: string;
    left?: string;
    width?: string;
    height?: string;
    border?: string;
    position?: string;
    zIndex?: string;
    visibility?: "visible" | "hidden" | "collapse" | "initial" | "inherit";
}
export interface IAttrs {
    title?: string;
    href?: string;
    rel?: string;
    src?: string;
    scrolling?: "no";
}
export interface IEvent {
    load?: (ev: Event) => any;
}
export interface ICreateDivOptions {
    classes?: Array<string>;
    id?: string;
    children?: Array<HTMLElement> | HTMLElement;
    text?: string;
    style?: IStyle;
    events?: IEvent;
    attrs?: IAttrs;
    parent?: HTMLElement;
}
export declare class DomHelper {
    static CreateDom<T extends keyof HTMLElementTagNameMap>(tag: T, options?: ICreateDivOptions): HTMLElementTagNameMap[T];
    static UpdateDom<T extends HTMLElement>(el: T, options?: ICreateDivOptions): T;
    static CreateDiv(options?: ICreateDivOptions): HTMLDivElement;
    static CreateStyle(styleString: string): HTMLStyleElement;
    static ClearChildren(parent: HTMLElement): void;
    static AppendChildren(parent: HTMLElement, children: Array<HTMLElement> | HTMLElement, options?: {
        clear?: boolean;
    }): void;
    static ToggleClass(element: HTMLElement, cls: string, status?: boolean): boolean;
    static findCompInNodeArray(cb: (node: IVnode) => boolean, childNodeArray?: Array<IVnode>): void;
}
//# sourceMappingURL=domHelper.d.ts.map