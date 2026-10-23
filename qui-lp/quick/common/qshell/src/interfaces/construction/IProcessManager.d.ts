import { IContextItem } from "../../../../shrimp/context";
export declare const ProcessManagerContextName: string;
export interface IProcessManager extends IContextItem {
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