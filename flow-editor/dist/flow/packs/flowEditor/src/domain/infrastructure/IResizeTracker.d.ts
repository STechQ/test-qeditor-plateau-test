export type ResizeCB = (rect: DOMRect) => void;
export interface IResizeTracker {
    DomElement: HTMLElement | undefined;
    attach(element: HTMLElement, cb: ResizeCB): void;
    detach(): void;
}
export declare const IResizeTracker: unique symbol;
//# sourceMappingURL=IResizeTracker.d.ts.map