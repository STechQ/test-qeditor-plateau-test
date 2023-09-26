import { IModuleManager } from "../../../../common/qshell";
import { IExternalQJsonRetriever } from "@stechquick/algae/lib/quick/IExternalQJsonRetriever";
import { ICompJson } from "../../../../common/shrimp/interfaces/ComponentInterfaces/ICompJson";
import { IVersion } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IVersion";
export declare class ModuleManager implements IModuleManager {
    private externalQJsonRetriever?;
    private namedCompsVersions?;
    SetExternalQJsonRetriever(externalQJsonRetriever: IExternalQJsonRetriever): void;
    constructor(namedCompsVersions?: IVersion);
    private getNamedCompsVersions;
    private checkNamedComponent;
    CheckComponent(compName: string, compPath: ICompJson["CP"]): Promise<any> | undefined;
}
//# sourceMappingURL=ModuleManagerImpl.d.ts.map