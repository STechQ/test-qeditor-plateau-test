import { IStyleChild } from "./ICompJson";
export declare type StyleValue = Record<string, string | undefined | Record<string, string>>;
export interface StyleItem {
    [key: string]: StyleValue | undefined;
    default?: StyleValue;
}
export declare type StyleJson = Record<string, StyleItem>;
export interface IComponentStyleInlineInterface {
    [key: string]: Array<IComponentInternalSI>;
}
export interface IComponentInternalSI {
    groupName?: string;
    groupContent: Array<IGroupContent>;
    showComponent?: boolean;
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
}
export declare const COMPONENT_STYLE_TYPE: {
    "color-picker": string;
    "font-picker": string;
    size: string;
    layout: string;
    "layout-chooser": string;
    "grid-column": string;
    "box-layout": string;
    "basic-input": string;
    "box-shadow": string;
    slider: string;
    border: string;
    "break-point-picker": string;
    "layout-input": string;
};
export interface IComponentDefinition {
    componentStyleList: IComponentStyleInlineInterface;
    propMigrateList?: Record<string, string>;
    inheritedChildList?: IStyleChild;
    propRemoveList?: Array<string>;
}
export declare type IAssetList = Record<string, Record<string, StyleValue>>;
export declare enum FontWeights {
    "Thin - 100" = 100,
    "Extra Light - 200" = 200,
    "Light - 300" = 300,
    "Regular - 400" = 400,
    "Medium - 500" = 500,
    "SemiBold - 600" = 600,
    "Bold - 700" = 700,
    "Extra Bold - 800" = 800,
    "Black - 900" = 900,
    "Weight - 1000" = 1000
}
export declare enum FontStyles {
    "Italic" = 0
}
//# sourceMappingURL=IStyle.d.ts.map