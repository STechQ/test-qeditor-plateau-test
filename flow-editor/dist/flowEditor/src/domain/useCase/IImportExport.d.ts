import { IFlowCopyModel, IFlowDesignModel } from "../../../../flowInterfaces/editor/IFlowDesignModel";
import { IFlowEditorModel } from "../../../../flowInterfaces/editor/IFlowEditorModel";
import { IFlowModel } from "../../../../flowInterfaces/runtime/IFlowModel";
export interface IExportTypeMap {
    "both": IFlowEditorModel;
    "design": IFlowDesignModel;
    "runtime": IFlowModel;
}
export interface IImportOptions {
    resetPanAndZoom?: boolean;
}
export interface IImportExport {
    importModel(model: IFlowDesignModel, options?: IImportOptions): Promise<void>;
    paste(copyModel: IFlowCopyModel): Promise<void>;
    exportModel<KType extends keyof IExportTypeMap>(type: KType): IExportTypeMap[KType];
    copy(): IFlowCopyModel;
}
export declare const IImportExport: unique symbol;
//# sourceMappingURL=IImportExport.d.ts.map