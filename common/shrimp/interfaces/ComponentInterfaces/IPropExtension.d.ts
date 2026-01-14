import { PType } from "./ICompJson";
export interface IPropExtension extends IPropExtensionUX {
    pType?: PType;
    desc?: string;
    MultiLanguageProperty?: boolean;
}
export interface IPropExtensionUX {
    required?: boolean;
    type?: ITypePim | ITypePim[];
    showInEditor?: boolean;
    editorDefaultValue?: string;
    runTimeDefaultValue?: string | number | boolean;
    runTimeOverrideValue?: string | number | boolean | {
        type: IPropOverrideType;
        value: string | number | boolean;
    };
    options?: Array<string | {
        Name: string;
        Value: string;
    }>;
    multiple?: boolean;
    GroupName?: string;
    MultiLanguageProperty?: boolean;
    propType?: PType;
    isReadOnly?: boolean;
    Level?: "Basic" | "Advanced";
}
export declare enum IPropOverrideType {
    Append = "Append",
    Override = "Override",
    Replace = "Replace"
}
export type ITypePim = StringConstructor | BooleanConstructor | NumberConstructor | ObjectConstructor | FunctionConstructor | ArrayConstructor | undefined | null | string;
export type ComponentOptions = Record<string, Record<string, IPropExtensionUX>>;
export declare const BasicProps: string[];
//# sourceMappingURL=IPropExtension.d.ts.map