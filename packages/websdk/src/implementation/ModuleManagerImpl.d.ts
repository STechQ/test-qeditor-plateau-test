import { IModuleManager } from "../../../../common/qshell";
import { ICompJson } from "../../../../common/shrimp/interfaces/ComponentInterfaces/ICompJson";
import { IExternalQJsonRetriever } from "../../../../common/shrimp/interfaces/quick/IExternalQJsonRetriever";
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