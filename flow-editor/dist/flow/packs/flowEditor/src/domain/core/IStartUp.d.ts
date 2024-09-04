import { IInitOptions } from "../../../../flowInterfaces/editor/editors/IFlowEditorProgram";
import { DependencyContainer } from "./diContainer";
export interface IStartUp {
    register(container: DependencyContainer, initOptions: IInitOptions): void | Promise<void>;
    unregister(container: DependencyContainer): void | Promise<void>;
    postInit(initOptions: IInitOptions): void;
}
//# sourceMappingURL=IStartUp.d.ts.map