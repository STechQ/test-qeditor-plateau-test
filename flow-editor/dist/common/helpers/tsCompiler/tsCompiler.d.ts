import type * as tsType from 'typescript';
export interface ICompileFile {
    name: string;
    body: string;
}
export interface ICompiledFile extends ICompileFile {
    outputText?: string;
    sourceMapText?: string;
    diagnostic?: Array<string>;
}
declare const Compile: (files: Array<ICompileFile>, options: tsType.CompilerOptions, tsInstance: typeof tsType) => Record<string, ICompiledFile>;
export default Compile;
//# sourceMappingURL=tsCompiler.d.ts.map