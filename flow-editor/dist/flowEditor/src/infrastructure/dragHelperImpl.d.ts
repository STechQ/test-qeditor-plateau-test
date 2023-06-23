import { IDragHelper } from "../domain/infrastructure/IDragHelper";
export declare class DragHelperImpl implements IDragHelper {
    setDragData<T>(event: DragEvent, data: T, dragType?: string): void;
    isDragData(event: DragEvent, dragType?: string): boolean;
    getDragData<T>(event: DragEvent): T | undefined;
}
//# sourceMappingURL=dragHelperImpl.d.ts.map