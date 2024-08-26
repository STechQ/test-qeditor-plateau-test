import { IExpressionData } from "../runtime/IExpression";
import { IPropObject } from "../runtime/IStepModel";
import * as React from "react";
import { ISwitchCaseExp } from "../../../../common/everything/flow/runtimeModels/ISwitch";
import { IVariable } from "../../../../common/everything/dataType/runtimemodels/IVariable";
import { INestedStore, IStoreModelForFlow, Store } from "../../../../common/everything/store/designtimemodels/IStoreModel";
import { IStudioUIModelBase, ModelType } from "../../../../common/everything/studio/ui/IStudioUIModelBase";
import { IWFModels } from "../../../../common/everything/workflow/runtimemodels/IModel";
export interface IExpressionInputOptions {
    width?: string;
}
export interface IExpressionEnumOptions {
    type: "enum";
    options: Array<{
        value?: string;
        text: string;
    }>;
    text?: string;
}
export interface IExpressionOptions {
    types: Array<Exclude<IExpressionData["type"], "enum"> | IExpressionEnumOptions>;
    expression?: IExpressionData;
    onChange?: (value: IExpressionData, iValid: boolean) => void;
    inputOptions?: IExpressionInputOptions;
}
export interface IModelBodyIO {
    inputs: Record<string, IVariable>;
    outputs: Record<string, IVariable>;
    otherProps?: Record<string, any>;
}
export type GetModelBody = (id: string, bodyKey: string) => Promise<IWFModels>;
export type GetRoles = () => Array<IRoleProp>;
export type GetSwimlanes = () => Array<ISwimlaneProp>;
export type SetStoreSchema = (id: string, schema: IStoreModelForFlow) => IStoreModelForFlow;
export type GetModelListCb = (type: ModelType) => Promise<Array<IStudioUIModelBase>>;
export { IStudioUIModelBase };
export interface ISwitchPropCase {
    operator: "==" | "other" | "empty" | "null";
    expression: IExpressionData;
    output: number;
    id: number;
}
export interface IRoleProp {
    id: string;
    name: IExpressionData;
}
export interface ISwimlaneProp {
    id: string;
    name: IExpressionData;
}
export interface ISelectedSwitchCase {
    stepId?: string;
    case?: ISwitchCaseExp;
    caseId?: string;
}
export interface IEditSectionInput<PropType = IPropObject> {
    propValues: PropType;
    callbacks: {
        setProp: <TName extends keyof PropType & string>(name: TName, value: PropType[TName]) => void;
        setOutputs: (outputs: Array<string>) => void;
        setSwimlaneName: (name: IExpressionData) => void;
        scope: {
            getStore: <TStore extends Store = Store>() => TStore;
        };
        ui?: {
            basePath?: string;
            getModelBody?: GetModelBody;
            getModels?: GetModelListCb;
            getRoles?: GetRoles;
            getSwimlanes?: GetSwimlanes;
            setSchema?: SetStoreSchema;
            getSelectedSwitchCase?: () => Array<string>;
        };
        loading: (show: boolean) => void;
        setSwitchArea?: (param: {
            case: ISwitchCaseExp;
            caseId: string;
        }) => void;
        selectedSwitchCase?: (cb: (param?: ISelectedSwitchCase) => void) => ISelectedSwitchCase | undefined;
        store?: Store;
        nestedStore: INestedStore;
        readOnly: boolean;
    };
    react: {
        prop: {
            NameDiv: React.ReactDOM["div"];
            DescDiv: React.ReactDOM["div"];
        };
        ExpressionComp: (options: IExpressionOptions) => JSX.Element;
    };
}
export interface IStepStyle {
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS's colors as `String`.
     */
    fill?: string;
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS's colors as `String`.
     */
    stroke?: string;
    borderLeft?: string;
}
export type ReactEditSection = () => JSX.Element;
export interface IInputInfo {
    name: string;
    color?: string;
}
export interface IStepOptions<PropType = IPropObject> {
    name: string;
    panelLabel: string;
    version: string;
    outputs: Array<string> | ((props: PropType | undefined) => Array<string>);
    inputs: Array<IInputInfo> | (() => Array<IInputInfo>);
    autoStarts?: boolean;
    color?: string;
    icon?: string;
    description?: string;
    editSection?: (options: IEditSectionInput<PropType>) => (ReactEditSection | HTMLElement);
    defaultProps?: () => PropType;
}
//# sourceMappingURL=IStepOptions.d.ts.map