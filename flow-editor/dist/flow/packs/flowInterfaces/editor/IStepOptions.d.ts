import { IExpressionData } from "../runtime/IExpression";
import { IPropDefiniton, IPropObject } from "../runtime/IStepModel";
import * as React from "react";
import { ISwitchCaseExp } from "../../../../common/everything/flow/runtimeModels/ISwitch";
import { IVariable } from "../../../../common/everything/dataType/runtimemodels/IVariable";
import { INestedStore, IStoreModelForFlow, Store } from "../../../../common/everything/store/designtimemodels/IStoreModel";
import { IStudioUIModelBase } from "../../../../common/everything/studio/ui/IStudioUIModelBase";
import { IWFModels } from "../../../../common/everything/workflow/runtimemodels/IModel";
import { IExpressionDataFiltered } from "../../../../common/everything/dataType/runtimemodels/IExpression";
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
export interface ICompiledCode {
    compiledCode: string;
    errors: Array<string>;
}
export interface IFindReferenceInCode {
    startLine: number;
    startColumn: number;
    endLine: number;
    endColumn: number;
}
export interface IEditOutput {
    outputName: string;
    position?: {
        x: number;
        y: number;
    };
}
type UnionKeys<T> = T extends any ? keyof T : never;
type ValueOf<T, K extends PropertyKey> = T extends any ? (K extends keyof T ? T[K] : never) : never;
export interface IEditSectionInput<PropType extends IPropObject = IPropObject> {
    propValues: PropType;
    callbacks: {
        setProp: <K extends UnionKeys<PropType> & string>(name: K, value?: ValueOf<PropType, K>, data?: Record<string, string>) => Promise<Array<string> | void>;
        setStepID: (newId: string) => void;
        setOutputs: (outputs: Array<string>) => void;
        setSwimlaneName: (name: IExpressionDataFiltered<"literal" | "string">) => void;
        changeOutputName: (oldName: string, newName: string) => void;
        scope: {
            getStore: <TStore extends Store = Store>() => TStore;
        };
        ui?: {
            basePath?: string;
            getModelBody?: GetModelBody;
            getRoles?: GetRoles;
            getSwimlanes?: GetSwimlanes;
            setSchema?: SetStoreSchema;
            getSelectedSwitchCase?: () => Array<string>;
            getSelection?: (type: string, cb: (id: string) => void) => void;
        };
        loading: (show: boolean) => void;
        setSwitchArea?: (param: {
            case: ISwitchCaseExp;
            caseId: string;
        }) => void;
        selectedSwitchCase?: (cb: (param?: ISelectedSwitchCase) => void) => ISelectedSwitchCase | undefined;
        openModelInNewTab: (modelID: string) => void;
        store?: Store;
        nestedStore: INestedStore;
        readOnly: boolean;
        models: Array<IStudioUIModelBase>;
        stepID: string;
        findReferenceInCode?: {
            get: () => IFindReferenceInCode | undefined;
            set: (val: IFindReferenceInCode | undefined) => void;
        };
    };
    react: {
        prop: {
            NameDiv: React.ReactDOM["div"];
            DescDiv: React.ReactDOM["div"];
        };
        ExpressionComp: (options: IExpressionOptions) => JSX.Element;
    };
    trigger: {
        editOutput?: {
            get: () => IEditOutput | undefined;
            delete: () => void;
        };
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
export interface IStepOptions<PropType extends IPropObject = IPropObject> {
    name: string;
    panelLabel: string;
    version: string;
    outputs: Array<string> | ((props: PropType | undefined) => Array<string>);
    inputs: Array<IInputInfo> | (() => Array<IInputInfo>);
    autoStarts?: boolean;
    color?: string;
    icon?: string;
    deprecated?: boolean;
    editSection?: (options: IEditSectionInput<PropType>) => (ReactEditSection | HTMLElement);
    propDefinitions: () => IPropDefiniton<PropType>;
    changeOutputName?: (props: PropType, oldName: string, newName: string) => PropType;
}
//# sourceMappingURL=IStepOptions.d.ts.map