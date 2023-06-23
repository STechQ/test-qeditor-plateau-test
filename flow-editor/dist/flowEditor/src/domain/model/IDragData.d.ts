interface IDragDataNew {
    dragType: "newStep";
    name: string;
    version: string;
}
interface IDragDataMove {
    dragType: "move";
    stepId: string;
}
export declare type DragData = IDragDataNew | IDragDataMove;
export {};
//# sourceMappingURL=IDragData.d.ts.map