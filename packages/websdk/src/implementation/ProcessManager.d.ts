import { IRendererConfig } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IRendererConfig";
import { IProcessManager } from "../../../../common/qshell";
export declare class ProcessManager implements IProcessManager {
    contextName: string;
    getMetadata: undefined | (() => any);
    setMetadata: undefined | (({ Metadata }: {
        Metadata: any;
    }) => void);
    changeProcessMetadata: undefined | (({ key, onSuccessFunc }: {
        key: string | undefined;
        onSuccessFunc: Function;
    }) => void);
    constructor({ contextName, config }: {
        contextName: string;
        config?: IRendererConfig;
    });
    createFunctions(config: IRendererConfig): void;
}
//# sourceMappingURL=ProcessManager.d.ts.map