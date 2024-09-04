export declare function importScript<T>(path: string, windowLibraryName: string, importField?: string): Promise<T>;
export declare function importModule<T>(path: string, require: (name: string) => any, importField: string | undefined): Promise<T>;
export declare function importModuleFile(path: string): Promise<string>;
export declare function importModuleBody<T>(moduleJs: string, require: (name: string) => any, importField: string | undefined): T;
//# sourceMappingURL=importHelper.d.ts.map