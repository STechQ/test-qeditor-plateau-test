export interface IProcessManager {
    getMetadata?: () => any;
    setMetadata?: (({ Metadata }: {
        Metadata: any;
    }) => void);
    changeProcessMetadata?: ({ key, onSuccessFunc }: {
        key: string | undefined;
        onSuccessFunc: Function;
    }) => void;
}
//# sourceMappingURL=IProcessManager.d.ts.map