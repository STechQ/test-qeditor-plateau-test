import { IFlowModel } from "../../runtime/IFlowModel";
import { IFlowCopyModel, IFlowDesignModel } from "../IFlowDesignModel";
import { IFlowEditorModel } from "../IFlowEditorModel";
import { IFlowEditorState } from "../IFlowEditorState";
import { GetModelBody, IStepOptions, IStudioUIModelBase, SetStoreSchema } from "../IStepOptions";
import { IModifiedStatus } from "../common/IModifiedStatus";
import { IWorkflowModel } from "../../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { IStoreModelForFlow } from "../../../../../common/everything/store/designtimemodels/IStoreModel";
import { IWorkflowDesignModel } from "../../../../../common/everything/workflow/designtimemodels/IWorkflowDesignModel";
import { ModelValidatorResult } from "../../../common/ModelValidator";
import { IFlowLocationDetail } from "../../../../../common/helpers/modelSearch/flowModelSearch";
export interface IExportTypeMap {
    both: IFlowEditorModel;
    design: IFlowDesignModel | IWorkflowDesignModel;
    runtime: IFlowModel | IWorkflowModel;
}
export interface IStepRequireInfo {
    stepName: string;
    version: string;
}
export interface IInitOptions {
    onStepRequire: (stepInfos: Array<IStepRequireInfo>) => Promise<Array<IStepOptions | string>>;
    onHistoryStatus?: (status: {
        undo: boolean;
        redo: boolean;
    }) => void;
    onCopyPasteStatus?: (status: {
        copy?: boolean;
        paste?: boolean;
    }) => void;
    onModifiedStatus?: (status: IModifiedStatus) => void;
    ui?: {
        onModelBodyRequire?: GetModelBody;
        onOpenConstantPanel?: (type: string, cb: (id: string) => void) => void;
        onStoreSchemaRequire?: SetStoreSchema;
        basePath?: string;
    };
    models: Array<IStudioUIModelBase>;
}
export interface IFlowEditorProgram {
    init(options: IInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    registerStep(step: IStepOptions | string): void;
    exportModel<KType extends keyof IExportTypeMap>(type: KType): Promise<IExportTypeMap[KType]>;
    importModel(model: IFlowDesignModel): Promise<void>;
    copy(): IFlowCopyModel;
    paste(model: IFlowCopyModel): Promise<void>;
    getState(): IFlowEditorState;
    setState(state?: IFlowEditorState): void;
    setSchema(schema: IStoreModelForFlow): void;
    setReadonly(readonly: boolean): void;
    setIsWorkFlow(isWorkFlow: boolean): void;
    setModels(models: Array<IStudioUIModelBase>): void;
    undo(): Promise<boolean>;
    redo(): Promise<boolean>;
    validateAndFixModel(): Promise<ModelValidatorResult>;
    referenceSearchResult(result: IFlowLocationDetail): Promise<void>;
    deleteObjects(): void;
}
//# sourceMappingURL=IFlowEditorProgram.d.ts.map