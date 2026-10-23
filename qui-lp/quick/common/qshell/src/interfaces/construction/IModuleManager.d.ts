import { ICompJson } from "../../../../shrimp/interfaces/ComponentInterfaces/ICompJson";
export interface IModuleManager {
    /**
     * Check if a component exists in memory or needs lazy load etc...
     * @param compName component name to lazy load if necessary
     */
    CheckComponent(compName: string, compPath: ICompJson["CP"]): Promise<any> | undefined;
}
//# sourceMappingURL=IModuleManager.d.ts.map