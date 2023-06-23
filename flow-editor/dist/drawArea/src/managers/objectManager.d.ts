import { IPoint } from "../../../flowInterfaces/editor/shape/IPoint";
import { FlowStep } from "../objects/flowStep";
import { FlowObjectBase } from "../objects/flowObjectBase";
import { ZuiManager } from "./zuiManager";
import { FlowConnection, FlowConnectionFrom, FlowConnectionTo } from "../objects/flowConnection";
import { FlowEvents, IFlowCopy, IFlowExport, IFlowStepOptions } from "../../types";
import { SelectionManager } from "./selectionManager";
import { EventHelper } from "../helper/eventHelper";
export declare class ObjectManager {
    private readonly zuiManager;
    private readonly selectionManager;
    private readonly eventHelper;
    private readonly idCreator;
    private pasteOffset;
    private objects;
    constructor(zuiManager: ZuiManager, selectionManager: SelectionManager, eventHelper: EventHelper<FlowEvents>);
    addFlowStep(stepName: string, surfacePoint: IPoint, options: IFlowStepOptions): FlowStep;
    private _addFlowStep;
    addFlowConnection(from: FlowConnectionFrom, to: FlowConnectionTo): FlowConnection;
    private _addFlowConnection;
    private addObject;
    getObject<T extends FlowObjectBase = FlowObjectBase>(objectID: string): T;
    getObjectsByType<T extends FlowObjectBase>(field: T["type"]): Array<T>;
    deleteObjects(objectIDs: Array<string>): void;
    copyObjects(objectIDs: Array<string>): IFlowCopy;
    exportObjects(): IFlowExport;
    private exportStep;
    private exportConnection;
    pasteObjects(copyData: IFlowCopy): Record<string, string>;
    importObjects(model: IFlowExport): void;
    private _import;
    setStepOutputs(stepID: string, outputs: Array<string>): void;
}
//# sourceMappingURL=objectManager.d.ts.map