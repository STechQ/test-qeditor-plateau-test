import { IScriptWithParam, IArgumentPim, IValuesPim, ITypePim, ICompilerLogger } from "./common";
interface ILangDTS {
    body?: string;
    error?: string;
}
export declare class WebTSCompiler {
    private static loadingProms;
    private static tsInstances;
    private static loadedDTSs;
    private static LazyLoadTsCompiler;
    static Compiler(options: Array<IScriptWithParam>, compilerData: Record<string, string>, typescriptServicesURL: string, opt: {
        gmEditMode?: boolean;
        targetVersion?: keyof typeof ts.ScriptTarget;
        moduleVersion?: keyof typeof ts.ModuleKind;
        logger?: ICompilerLogger;
    }): Promise<{
        options: IScriptWithParam[];
        compRes: Record<string, import("./tsCompiler").ICompiledFile>;
    }>;
    private static FetchModuleBody;
    static LoadAndCacheDTSs(typescriptServicesURL: string, opt: {
        logger?: ICompilerLogger;
    }): Promise<Record<string, ILangDTS | undefined>>;
}
export type { IScriptWithParam, IArgumentPim, IValuesPim };
export type { ITypePim };
//# sourceMappingURL=webCompiler.d.ts.map