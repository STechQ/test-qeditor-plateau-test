/// <reference types="react" />
import { IVMHistory } from "../../../../flowInterfaces/editor/IFlowEditorState";
import { IFindReferenceInCode, IStepOptions } from "../../../../flowInterfaces/editor/IStepOptions";
import { IInitOptions } from "../../../../flowInterfaces/editor/editors/IFlowEditorProgram";
import { IStepModel } from "../../../../flowInterfaces/runtime/IStepModel";
import { IExpressionData } from "@stechquick/flow-interfaces/runtime";
import { INestedStore, Store } from "../../../../../../common/everything/store/designtimemodels/IStoreModel";
import { ISLA } from "../../../../../../common/everything/workflow/runtimemodels/ISLA";
import { IExecuteFlowByMapping, IOldCamundaFieldsForWFModel } from "../../../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { ISwitchCaseExp } from "../../../../../../common/everything/flow/runtimeModels/ISwitch";
import { FlowExecutionType } from "@stechquick/flow-interfaces/runtime/IFlowModel";
import { IExpressionDataFiltered } from "../../../../../../common/everything/dataType/runtimemodels/IExpression";
export interface IConnectionFrom {
    step: string;
    output: string;
}
export interface IConnectionTo {
    step: string;
    input: string;
}
export interface IConnectionInstance {
    from: IConnectionFrom;
    to: IConnectionTo;
}
export interface IStepInstance {
    id: string;
    name: string;
    type: IExpressionData["type"];
    swimlaneId?: string;
    options: IStepOptions;
    propValues: IStepModel["P"];
    compiledValues?: {
        compiledCode: string;
        errors: Array<string>;
    };
    oldCamundaFields?: IStepModel["oldCamundaFields"];
}
export interface ISwimlaneInstance {
    id: string;
    name: IExpressionDataFiltered<"string" | "literal">;
}
export interface IRoleInstance {
    id: string;
    name: IExpressionData;
}
export type ReactComponent<TProps = Record<string, any>> = (props: TProps) => JSX.Element;
export interface IViewModel {
    stepRepo: Record<string, Record<string, IStepOptions> | undefined>;
    steps: Record<string, IStepInstance | undefined>;
    swimlanes: Record<string, ISwimlaneInstance>;
    roles: Record<string, IRoleInstance>;
    connections: Record<string, IConnectionInstance | undefined>;
    selecteds: Array<string>;
    initOptions: IInitOptions;
    componentMap: Map<symbol, ReactComponent>;
    history: IVMHistory;
    store: Store;
    nestedStore: INestedStore;
    readonly: boolean;
    isWorkFlow?: boolean;
    name?: string;
    _name?: string;
    selectedSwitchStepId?: string;
    selectedSwitchCase?: {
        caseId: string;
        case: ISwitchCaseExp;
    };
    schema: Store;
    priority?: number;
    sla: ISLA;
    label?: IExpressionData;
    description?: string;
    businessKeyGenerationFunction?: IExecuteFlowByMapping;
    fileUploadFunction?: IExecuteFlowByMapping;
    fileDownloadFunction?: IExecuteFlowByMapping;
    fileDeleteFunction?: IExecuteFlowByMapping;
    resetHistory: () => IVMHistory;
    executeType: FlowExecutionType;
    uniqueKey?: IExpressionData;
    selectedModelId: string;
    oldCamundaFieldsForWFModel?: IOldCamundaFieldsForWFModel;
    findReferenceInCode?: IFindReferenceInCode;
}
export declare const IViewModel: unique symbol;
//# sourceMappingURL=IViewModel.d.ts.map