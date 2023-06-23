import { IStepOptions, ListUIPagesCb } from "../../../../flowInterfaces/editor/IStepOptions";
import { IEntity } from "../../../../flowInterfaces/runtime/IEntity";
import { DependencyContainer } from "./diContainer";
export interface IStepRequireInfo {
    stepName: string;
    version: string;
}
export interface IModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IInitOptions {
    onStepRequire: (stepInfos: Array<IStepRequireInfo>) => Promise<Array<IStepOptions | string>>;
    onHistoryStatus?: (status: {
        undo: boolean;
        redo: boolean;
    }) => void;
    onCopyPasteStatus?: (status: {
        copy?: boolean;
        paste?: boolean;
    }) => void;
    onModifiedStatus?: (status: IModifiedStatus) => void;
    entity?: {
        onListRequire: () => Promise<Array<string>> | Array<string>;
        onRequire: (name: string) => Promise<IEntity> | IEntity;
    };
    ui?: {
        onUIPageListRequire: ListUIPagesCb;
    };
}
export interface IStartUp {
    register(container: DependencyContainer, initOptions: IInitOptions): void | Promise<void>;
    unregister(container: DependencyContainer): void | Promise<void>;
    postInit(initOptions: IInitOptions): void;
}
//# sourceMappingURL=IStartUp.d.ts.map