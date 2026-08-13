/// <reference path="../../../../../../../common/helpers/tsCompiler/typescriptServices.d.ts" />
import { ICompiledFile } from "./tsCompiler";
export type ICompilerLogger = (logItem: {
    message: string;
    error?: any;
    level?: "info" | "warn" | "error";
}) => void;
export declare function logWrapper(logger: ICompilerLogger | undefined, logItem: {
    message: string;
    error?: any;
    level?: "info" | "warn" | "error";
}): void;
type ScriptLang = "QS" | "JS" | "TS" | "FL" | "GUI";
export interface ICLIWEBCompiler {
    Compiler(options: Array<IScriptWithParam>, compilerData: Record<string, string>, typescriptServicesURL: string, opt: {
        gmEditMode?: boolean;
        targetVersion?: keyof typeof ts.ScriptTarget;
        moduleVersion?: keyof typeof ts.ModuleKind;
        logger?: ICompilerLogger;
    }): Promise<{
        options: IScriptWithParam[];
        compRes: Record<string, ICompiledFile>;
    }>;
}
export interface IScriptWithParam {
    script: string;
    params?: string;
    lang: ScriptLang;
    assigner: (compiledCode: string) => void;
    errorHandler: (err: any) => void;
    errors?: Array<any>;
    name: string;
}
export interface IArgumentPim {
    Name: string;
    Desc?: string | null;
    Type?: ITypePim;
    Options?: Array<IValuesPim> | string[];
    Multiple?: boolean;
}
export interface IValuesPim {
    Name: string;
    Value: any;
}
export type ITypePim = StringConstructor | BooleanConstructor | NumberConstructor | ObjectConstructor | FunctionConstructor | ArrayConstructor | undefined | null | string;
export declare function GenerateParamsIntelli(params?: Array<IArgumentPim> | string): string;
export declare function PropTypeToTs(type: StringConstructor | BooleanConstructor | NumberConstructor | ObjectConstructor | FunctionConstructor | undefined | null | string | {}, usage?: "prop" | "retVal"): string;
export declare function TypescriptCompilerOptions<T extends ts.CompilerOptions>(tsInst?: typeof ts, gmEditMode?: boolean, targetVersion?: keyof typeof ts.ScriptTarget, moduleVersion?: keyof typeof ts.ModuleKind): T;
export {};
//# sourceMappingURL=common.d.ts.map