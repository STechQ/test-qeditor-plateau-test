export declare class LazyLoader {
    static LoadModule<exportingInterface>(moduleBody: string): exportingInterface | undefined;
    static FetchModuleBody(url: string): Promise<{
        body: string;
        status: number;
    }>;
}
//# sourceMappingURL=lazyLoader.d.ts.map