import { IStyleChild } from "./ICompJson";
export declare type StyleValue = Record<string, string | boolean | undefined | Record<string, string>>;
export interface StyleItem {
    [key: string]: StyleValue | undefined;
    default?: StyleValue;
}
export interface IComponentStyleInlineInterface {
    [key: string]: Array<IComponentInternalSI>;
}
export interface IComponentInternalSI {
    groupName?: string;
    groupContent: Array<IGroupContent>;
    showComponent?: boolean;
    inheritedStyle?: boolean;
}
export interface IGroupContent {
    styleKey: Array<IComponentStyleKey>;
    type?: keyof typeof COMPONENT_STYLE_TYPE | "";
    displayName?: string;
    [key: string]: any;
}
export interface IComponentStyleKey {
    param: string;
    value?: string;
    key?: string;
    [key: string]: string | boolean | undefined;
    disabled?: boolean;
}
export declare const COMPONENT_STYLE_TYPE: {
    "color-picker": string;
    "font-picker": string;
    size: string;
    layout: string;
    "layout-chooser": string;
    "grid-column": string;
    "box-layout": string;
    "inner-box-layout": string;
    "basic-input": string;
    "box-shadow": string;
    slider: string;
    border: string;
    "break-point-picker": string;
    "layout-input": string;
    display: string;
    "content-direction": string;
    "padding-input": string;
    "display-text-decoration": string;
    "display-text-align": string;
};
export interface IComponentDefinition {
    componentStyleList: IComponentStyleInlineInterface;
    propMigrateList?: Record<string, string>;
    inheritedChildList?: IStyleChild;
    propRemoveList?: Array<string>;
    extendedDefaulStyleList?: Record<string, string>;
    hideStyledCompField?: boolean;
    parentListToBlockStyle?: Array<string>;
}
export declare type IAssetList = Record<string, Record<string, Record<string, string | StyleValue | undefined>>>;
//# sourceMappingURL=IStyle.d.ts.map