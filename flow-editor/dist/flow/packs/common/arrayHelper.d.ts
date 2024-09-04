export declare function arrayToObject<ItemType, KeyType extends string | number>(arr: Array<ItemType>, getKeyName: (item: ItemType, index: number) => KeyType | undefined): Record<KeyType, ItemType>;
export declare function arrayToKeyValuePair<ItemType, KeyType extends string | number, ValueType>(arr: Array<ItemType>, getKeyValuePair: (item: ItemType, index: number) => {
    key: KeyType;
    value: ValueType;
} | undefined): Record<KeyType, ValueType>;
/**
 * @returns [removed items, added items]
 */
export declare function arrayDiff<ItemType>(oldArr: Array<ItemType>, newArr: Array<ItemType>): string[][] | ItemType[][];
//# sourceMappingURL=arrayHelper.d.ts.map