/**
 * project wide object store helper
 */
export declare function GetObjectStore(): ObjectStore;
declare class ObjectData {
    private value;
    private watches;
    constructor(value: any);
    getValue(): any;
    addWatch(cb: (newValue?: any, oldValue?: any) => void): void;
    setValue(value: any): void;
}
declare class ObjectStore {
    private data;
    private getObject;
    retrieveObject(name: string): any;
    storeObject(name: string, value: any): ObjectData;
    watch(name: string, cb: (newValue?: any, oldValue?: any) => void): ObjectData;
}
export {};
//# sourceMappingURL=objectStore.d.ts.map