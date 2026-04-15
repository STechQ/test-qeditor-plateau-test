import { IFlowCoreModel, IFlowDesignModel } from "../../../../flowInterfaces/editor/IFlowDesignModel";
import { IExportTypeMap } from "../../../../flowInterfaces/editor/editors/IFlowEditorProgram";
import { DependencyContainer } from "../../domain/core/diContainer";
import { IDrawArea } from "../../domain/infrastructure/IDrawArea";
import { IFlow } from "../../domain/useCase/IFlow";
import { IHistory } from "../../domain/useCase/IHistory";
import { IImportExport, IImportOptions } from "../../domain/useCase/IImportExport";
import { ISelection } from "../../domain/useCase/ISelection";
import { IStepRepo } from "../../domain/useCase/IStepRepo";
import { IStepInstance, IViewModel } from "../../domain/viewModel/IViewModel";
import { IPropObject } from "@stechquick/flow-interfaces/runtime";
import { PropValue } from "../../../../flowInterfaces/runtime/IStepModel";
export declare class ImportExportImpl implements IImportExport {
    private readonly viewModel;
    private readonly stepRepo;
    private readonly drawArea;
    private readonly flow;
    private readonly history;
    private readonly selection;
    constructor(container: DependencyContainer, viewModel?: IViewModel, stepRepo?: IStepRepo, drawArea?: IDrawArea, flow?: IFlow, history?: () => IHistory, selection?: () => ISelection);
    importModel(model: IFlowDesignModel, options?: IImportOptions): Promise<void>;
    paste(coreModel: IFlowCoreModel): Promise<void>;
    private _import;
    private syncHumanTaskStepIds;
    private resolveFlowDrawComps;
    private registerFlowCoreObjects;
    exportModel<KType extends keyof IExportTypeMap>(type: KType): Promise<IExportTypeMap[KType]>;
    copy(): {
        steps: {
            ID: string;
            sp: import("@stechquick/flow-interfaces/editor/shape/IPoint").IPoint;
            name: string;
            version: string;
            props: IPropObject;
            swimlaneId: string | undefined;
        }[];
        connections: {
            f: string;
            f_o: string;
            t: string;
            t_i: string;
            ID: string;
        }[];
    };
    setStepPropDict(step: IStepInstance): void;
    compileCode(label: string, propValue: PropValue, data?: Record<string, string>, compiledValues?: {
        compiledCode: string;
        errors: Array<string>;
    }): Promise<{
        compiledCode: string;
        errors: string[];
    }>;
    deleteObjects(): void;
    private exportEditorModel;
    private exportDesignModel;
    private updateRuntimeObject;
    private generateFlowIntelli;
    private exportRuntimeFlowModel;
    private exportRuntimeWorkFlowModel;
    private exportDesignWorkflowModel;
    private exportRuntimeModel;
    private exportDesigntimeModel;
}
//# sourceMappingURL=importExportImpl.d.ts.map