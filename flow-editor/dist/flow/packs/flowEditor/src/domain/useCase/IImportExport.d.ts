import { IFlowCopyModel, IFlowDesignModel } from "../../../../flowInterfaces/editor/IFlowDesignModel";
import { IExportTypeMap } from "../../../../flowInterfaces/editor/editors/IFlowEditorProgram";
import { IStepInstance } from "../viewModel/IViewModel";
import { PropValue } from "@stechquick/flow-interfaces/runtime/IStepModel";
export interface IImportOptions {
    resetPanAndZoom?: boolean;
}
export interface IImportExport {
    importModel(model: IFlowDesignModel, options?: IImportOptions, undoRedo?: boolean): Promise<void>;
    paste(copyModel: IFlowCopyModel): Promise<void>;
    exportModel<KType extends keyof IExportTypeMap>(type: KType): Promise<IExportTypeMap[KType]>;
    copy(): IFlowCopyModel;
    setStepPropDict(step: IStepInstance): void;
    compileCode(label: PropValue, propValue: PropValue): Promise<{
        compiledCode: string;
        errors: string[];
    }>;
}
export declare const IImportExport: unique symbol;
//# sourceMappingURL=IImportExport.d.ts.map