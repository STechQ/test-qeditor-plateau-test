export interface IStore extends IStorageAccess {
    set(name: string, value: any | undefined): void;
    get(name: string): any | undefined;
    getAll(): any | undefined;
    delete(name: string): void;
    deleteAll(): void;
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
//# sourceMappingURL=IStore.d.ts.map