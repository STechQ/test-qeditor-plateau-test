import { IResizeTracker, ResizeCB } from "../domain/infrastructure/IResizeTracker";
export declare class ResizeTrackerImpl implements IResizeTracker {
    private resizeObserver?;
    private domElement?;
    private cb?;
    get DomElement(): HTMLElement | undefined;
    constructor();
    attach(element: HTMLElement, cb: ResizeCB): void;
    private resizeHandler;
    detach(): void;
}
//# sourceMappingURL=resizeTrackerImpl.d.ts.map