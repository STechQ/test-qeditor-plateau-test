/// <reference types="react" />
import { IExpressionData } from "../runtime/IExpression";
import { IPropObject } from "../runtime/IStepModel";
import { IEntity } from "../runtime/IEntity";
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
export interface IUIPageInfo {
    qjsonPath: string;
    name: string;
}
export declare type ListUIPagesCb = () => Promise<Array<IUIPageInfo>>;
export interface IEditSectionInput<PropType = IPropObject> {
    propValues: PropType;
    callbacks: {
        setProp: <TName extends keyof PropType & string>(name: TName, value: PropType[TName]) => void;
        setOutputs: (outputs: Array<string>) => void;
        entity?: {
            getList: () => Promise<Array<string>> | Array<string>;
            get: (name: string) => Promise<IEntity> | IEntity;
        };
        ui?: {
            listUIPages: ListUIPagesCb;
        };
        loading: (show: boolean) => void;
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
}
export declare type ReactEditSection = () => JSX.Element;
export interface IInputInfo {
    name: string;
    color?: string;
}
export interface IStepOptions<PropType = IPropObject> {
    name: string;
    version: string;
    outputs: Array<string> | ((props: PropType | undefined) => Array<string>);
    inputs: Array<IInputInfo> | (() => Array<IInputInfo>);
    autoStarts?: boolean;
    style?: IStepStyle;
    editSection?: (options: IEditSectionInput<PropType>) => (ReactEditSection | HTMLElement);
    defaultProps?: () => PropType;
}
//# sourceMappingURL=IStepOptions.d.ts.map