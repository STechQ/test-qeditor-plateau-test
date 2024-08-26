interface IDragDataNew {
    dragType: "newStep";
    name: string;
    version: string;
}
interface IDragDataNewNode {
    dragType: "newNode";
    name: string;
    version: string;
    swimlane: string;
}
interface IDragDataMove {
    dragType: "move";
    stepId: string;
}
export type DragData = IDragDataNew | IDragDataNewNode | IDragDataMove;
export {};
//# sourceMappingURL=IDragData.d.ts.map