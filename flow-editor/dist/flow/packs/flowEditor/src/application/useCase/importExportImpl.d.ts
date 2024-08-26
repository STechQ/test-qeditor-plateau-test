import { IFlowCopyModel, IFlowDesignModel } from "../../../../flowInterfaces/editor/IFlowDesignModel";
import { IExportTypeMap } from "../../../../flowInterfaces/editor/editors/IFlowEditorProgram";
import { DependencyContainer } from "../../domain/core/diContainer";
import { IDrawArea } from "../../domain/infrastructure/IDrawArea";
import { IFlow } from "../../domain/useCase/IFlow";
import { IHistory } from "../../domain/useCase/IHistory";
import { IImportExport, IImportOptions } from "../../domain/useCase/IImportExport";
import { ISelection } from "../../domain/useCase/ISelection";
import { IStepRepo } from "../../domain/useCase/IStepRepo";
import { IViewModel } from "../../domain/viewModel/IViewModel";
export declare class ImportExportImpl implements IImportExport {
    private readonly viewModel;
    private readonly stepRepo;
    private readonly drawArea;
    private readonly flow;
    private readonly history;
    private readonly selection;
    constructor(container: DependencyContainer, viewModel?: IViewModel, stepRepo?: IStepRepo, drawArea?: IDrawArea, flow?: IFlow, history?: () => IHistory, selection?: () => ISelection);
    importModel(model: IFlowDesignModel, options?: IImportOptions): Promise<void>;
    paste(copyModel: IFlowCopyModel): Promise<void>;
    private _import;
    exportModel<KType extends keyof IExportTypeMap>(type: KType): IExportTypeMap[KType];
    copy(): IFlowCopyModel;
    private getCopyModel;
    private exportEditorModel;
    private exportDesignModel;
    private exportWFFuncFlowProps;
    private updateRuntimeObject;
    private exportRuntimeFlowModel;
    private exportRuntimeWorkFlowModel;
    private exportRuntimeModel;
}
//# sourceMappingURL=importExportImpl.d.ts.map