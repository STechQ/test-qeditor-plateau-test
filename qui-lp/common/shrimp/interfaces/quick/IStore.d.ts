import { IContextItem } from "../../src/context/IContextItem";
import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
export interface IStore extends IStorageAccess {
    set(name: string, value: any | undefined): void;
    get(name: string): any | undefined;
    getAll(): any | undefined;
    delete(name: string): void;
    deleteAll(): void;
    getDependants(field: string | number | symbol, pageId: string): Record<string, IContextDepTarget>;
    addDependant(field: string | number | symbol, pageId: string, propCalcContext: IContextItem): void;
    dependants?: Record<string, Record<string, Record<string, IContextDepTarget>>>;
}
export interface IStorageAccess {
    setSessionStorage?({ key, value }: {
        key: string;
        value: string;
    }): void;
    clearSessionStorage?(): void;
    getItemFromSessionStorage?({ key }: {
        key: string;
    }): string | null;
    removeItemFromSessionStorage?({ key }: {
        key: string;
    }): void;
    setLocalStorage?({ key, value }: {
        key: string;
        value: string;
    }): void;
    clearLocalStorage?(): void;
    getItemFromLocalStorage?({ key }: {
        key: string;
    }): string | null;
    removeItemFromLocalStorage?({ key }: {
        key: string;
    }): void;
}
export interface IContextTargetInst {
    targetInstance: object | ICompDepTarget;
}
export interface IContextDepTarget {
    [x: string]: any;
    instanceHolder: IContextTargetInst;
    field: string;
    depScriptValue: string;
}
export interface ICompDepTarget {
    ref: IComponentCollection;
}
//# sourceMappingURL=IStore.d.ts.map