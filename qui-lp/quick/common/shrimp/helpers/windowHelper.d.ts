export interface IDocument extends Partial<Document> {
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;
}
export interface IHistory extends Partial<History> {
    pushState(data: any, title: string, url?: string | null): void;
}
export interface IWindow extends Partial<Window> {
}
export interface IWorker {
    worker(scriptURL: string | URL, options?: WorkerOptions | undefined): Worker | undefined;
}
export declare class WindowHelper {
    private doc;
    private hist;
    private win;
    private helperWorker?;
    private eventListeners;
    constructor();
    set onPopState(value: ((ev: PopStateEvent) => any) | null);
    get document(): IDocument;
    get history(): IHistory;
    get Window(): IWindow;
    get Worker(): IWorker | undefined;
    static Instance: WindowHelper;
}
//# sourceMappingURL=windowHelper.d.ts.map