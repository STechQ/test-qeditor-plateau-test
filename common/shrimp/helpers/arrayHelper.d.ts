export declare class ArrayHelper {
    static findAndRet<T, R>(array: Array<T>, predicate: (item: T, index: number, array: Array<T>) => R | undefined): R | undefined;
    static InitArray(size: number): number[];
    static InitEmptyArray(size: number): any[];
    /**
     * Fast way to find last object in a given array
     * @param array to be search in
     * @param key to be last searched  object key
     */
    static lastIndexOf(array: Array<any>, key: string, value?: any): number;
    /**
     * Change object of index
     * First index can move to the end of the array
     * Last index can move to first index
     * @param array Array to be moved
     * @param oldIndex Old index of object
     * @param newIndex New index of object
     */
    static arrayMove(array: Array<Object | null>, oldIndex: number, newIndex: number): void;
}
//# sourceMappingURL=arrayHelper.d.ts.map