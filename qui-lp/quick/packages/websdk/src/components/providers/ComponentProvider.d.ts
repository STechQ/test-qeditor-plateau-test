import { IComponent } from "../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponent";
import { CompGroupType } from "../../../../../common/shrimp/interfaces/quick/IWebSDK";
export interface ComponentTarget {
    compInstance: Function | any;
    CompType?: CompGroupType;
}
export declare class ComponentProvider {
    static fetchLibrary: Function;
    static getComponentList: (companyLibraryGroup: Array<CompGroupType>) => Record<CompGroupType, any>;
    static getComponentProps: (companyLibraryGroup: string, name: any) => any;
    static getComponentEvents: (companyLibraryGroup: string, name: any) => any;
    static getComponentConst: (name: any) => ComponentTarget | undefined;
    static editorcompList: {
        Messaging: number;
        QTimer: number;
        QIdleTimer: number;
    };
    static checkComponents(name: string): Promise<true> | Boolean;
    static getLibrary(companyLibraryGroup: string): any;
    static overrideComp: (compName: string) => (IComponent | null) | undefined;
    static setOverrideComp(cb: (compName: string) => IComponent | null): void;
}
//# sourceMappingURL=ComponentProvider.d.ts.map