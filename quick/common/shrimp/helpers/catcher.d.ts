export declare class catcher {
    static tryLog({ cb, catchLog }: {
        cb: () => void;
        catchLog?: (err: any) => string;
    }): void;
    static try<RetType>(cb: () => RetType, params: {
        catchLog?: (err: Error) => string;
    }): RetType;
}
//# sourceMappingURL=catcher.d.ts.map