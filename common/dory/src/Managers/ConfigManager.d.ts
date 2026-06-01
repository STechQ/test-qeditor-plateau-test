import { ContextManager, IContextItem } from "../../../shrimp/context";
import { IConfig } from "../../../shrimp/interfaces/quick/IConfig";
export declare class ConfigManager implements IContextItem {
    static ContextName: string;
    contextName: string;
    currentContext: ContextManager;
    private configValues?;
    constructor(currentContext: ContextManager);
    SetConfigValues(configValues?: IConfig[]): void;
    GetConfigValues(key: string): IConfig | undefined;
}
//# sourceMappingURL=ConfigManager.d.ts.map