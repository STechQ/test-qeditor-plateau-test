import { IFlowCoreModel, IFlowDesignModel } from "../../../../flowInterfaces/editor/IFlowDesignModel";
import { IExportTypeMap } from "../../../../flowInterfaces/editor/editors/IFlowEditorProgram";
import { IStepInstance } from "../viewModel/IViewModel";
import { PropValue } from "@stechquick/flow-interfaces/runtime/IStepModel";
export interface IImportOptions {
    resetPanAndZoom?: boolean;
    undoRedo?: boolean;
}
export interface IImportExport {
    importModel(model: IFlowDesignModel, options?: IImportOptions): Promise<void>;
    exportModel<KType extends keyof IExportTypeMap>(type: KType): Promise<IExportTypeMap[KType]>;
    copy(): IFlowCoreModel;
    paste(coreModel: IFlowCoreModel): Promise<void>;
    deleteObjects(): void;
    setStepPropDict(step: IStepInstance): void;
    compileCode(label: PropValue, propValue: PropValue, data?: Record<string, string>, compiledValues?: {
        compiledCode: string;
        errors: Array<string>;
    }): Promise<{
        compiledCode: string;
        errors: string[];
    }>;
}
export declare const IImportExport: unique symbol;
//# sourceMappingURL=IImportExport.d.ts.map