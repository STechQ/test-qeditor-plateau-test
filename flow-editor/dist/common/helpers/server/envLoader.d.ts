type IEnvLoaderOptions = {
    pathOutsideApp: boolean;
} & ({
    import_meta: ImportMeta;
} | {
    __filename: string;
});
export declare const once: <T>(cb: () => T) => () => T;
export declare const process: {
    env: {
        must(key: string, options?: {
            reason?: string;
        }): string;
        mustValid<TValidTypes extends readonly string[]>(key: string, validValues: TValidTypes, options?: {
            reason?: string;
        }): TValidTypes[number];
        can(key: string): string | undefined;
        canValid<TValidTypes_1 extends readonly string[]>(key: string, validValues: TValidTypes_1): TValidTypes_1[number] | undefined;
    };
};
export declare class EnvLoader {
    loadEnvFile(relativeEnvFilePath: string, options: IEnvLoaderOptions): Promise<void>;
    private tryIt;
    private fixOutsideAppPath;
    private getFilePath;
    private loadMockFileCjs;
    private loadMockFileEsmodule;
}
export {};
//# sourceMappingURL=envLoader.d.ts.map