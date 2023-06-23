export interface IDragHelper {
    setDragData<T>(event: DragEvent, data: T): void;
    getDragData<T>(event: DragEvent): T | undefined;
    isDragData(event: DragEvent, dragType?: string): boolean;
}
export declare const IDragHelper: unique symbol;
//# sourceMappingURL=IDragHelper.d.ts.map