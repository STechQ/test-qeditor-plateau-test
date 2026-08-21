import { PerfManager } from "./PerfManager";
export declare class PerfSingles {
    private static self;
    static Register(): void;
    static Activate(name?: string): void;
    static Instance(name?: string): PerfManager;
    static Reset(): void;
    private static findSelf;
    private perfSingles;
    private perfSingle?;
    private findPerf;
    Activate(name?: string): void;
}
//# sourceMappingURL=PerfSingles.d.ts.map