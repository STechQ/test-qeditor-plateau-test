import { IDictionary } from "../interfaces/IDictionary";
export declare enum LayoutOption {
    display = "d",
    column = "c",
    flexDirection = "fd",
    align = "a",
    justify = "j",
    wrap = "w",
    spacing = "sp",
    textTypography = "tt",
    textColor = "tc",
    textEmphasis = "te",
    marginTop = "mt",
    marginRight = "mr",
    marginBottom = "mb",
    marginLeft = "ml",
    marginAll = "ma",
    paddingTop = "pt",
    paddingRight = "pr",
    paddingBottom = "pb",
    paddingLeft = "pl",
    paddingAll = "pa",
    italic = "fi"
}
declare const spacingPrefix = "sp";
declare const columnOptions: {
    text: string;
    key: string;
}[];
declare const directionOptions: {
    text: string;
    key: string;
    iconClass: string;
}[];
declare const justifyOptions: {
    text: string;
    key: string;
    iconClass: string;
}[];
declare const alignOptions: {
    text: string;
    key: string;
    iconClass: string;
}[];
declare const wrapOptions: {
    text: string;
    key: string;
}[];
declare const typographyOptions: {
    text: string;
    key: string;
}[];
declare const textColorOptions: {
    text: string;
    key: string;
}[];
declare const textEmphasisOptions: {
    text: string;
    key: string;
}[];
declare const spacingOptionsPrefix: string[];
declare let layoutBarComponentClassList: IDictionary<IDictionary<Array<string>>>;
declare function getOptionsClass(dOpt: IDictionary<Array<string>>): string;
export { columnOptions, directionOptions, justifyOptions, alignOptions, wrapOptions, typographyOptions, textColorOptions, textEmphasisOptions, getOptionsClass, spacingPrefix, spacingOptionsPrefix, layoutBarComponentClassList };
//# sourceMappingURL=layoutBarHelper.d.ts.map