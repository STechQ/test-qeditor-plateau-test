export declare function objectKeys<T extends object>(object: T): Array<keyof T>;
export declare function objectEntries<T extends object>(object: T): Array<[keyof T, T[keyof T]]>;
export declare function objectToArray<TObject extends object, TEach>(object: TObject, converter: (item: TObject[keyof TObject], key: keyof TObject) => TEach): Array<TEach>;
export declare function filterNulls<TItem>(array: Array<TItem | undefined>): Array<TItem>;
/**
 * fixes 1 to 2
 * 1> { key?: number }              -> Object.values(...).forEach(item: number => ...)
 * 2> { key: number | undefined }   -> Object.values(...).forEach(item: number | undefined => ...)
 */
export declare function objectValues<T extends object>(obj: T): Array<Extract<T[keyof T], unknown>>;
//# sourceMappingURL=objectHelper.d.ts.map