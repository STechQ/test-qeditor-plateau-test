import { IPerfable } from "./IPerfable";
export declare class PerfManager {
    private isActive;
    get IsActive(): boolean;
    Activate(): void;
    Reset(): void;
    Measure<T>(name: string, codeBlock: () => Promise<T> | T): Promise<T>;
    Start(name: string): void;
    End(name: string, perfableObject?: IPerfable): void;
    GetAvg(name?: string): number | undefined;
    GetSum(name?: string): number | undefined;
    GetList(name?: string): PerformanceEntryList | undefined;
    private avg;
    private sum;
    private getStartName;
    private getEndName;
}
//# sourceMappingURL=PerfManager.d.ts.map