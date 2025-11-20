import { IDictionary } from "../../../../common/shrimp/interfaces/IDictionary";
import { IContainerServicesWrapper } from "../../../../common/shrimp/interfaces/quick/IContainerServices";
import { ILanguageExtensions } from "../../../../common/qshell";
export declare class LanguageExtensions implements ILanguageExtensions {
    static ContextName: string;
    contextName: string;
    private servicesWrapper;
    private osGlobal;
    constructor(servicesWrapper: IContainerServicesWrapper);
    manageShellObject(): void;
    createOsGlobalObjects(): IDictionary<any>;
    private createOsGlobalObjectsInternal;
}
//# sourceMappingURL=LanguageExtensions.d.ts.map