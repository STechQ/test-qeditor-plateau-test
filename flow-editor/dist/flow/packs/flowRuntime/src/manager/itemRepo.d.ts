export declare class ItemRepo<Item, ItemKeys> {
    private readonly keyGetter;
    private itemDict;
    constructor(keyGetter: (keys: ItemKeys) => string);
    startGather(keys: ItemKeys, itemRetriever: (key: string) => Promise<Item>): Promise<Item>;
    getItem(keys: ItemKeys, itemRetriever: (key: string) => Promise<Item>): Promise<Item>;
    clean(): void;
    private resolveItem;
}
//# sourceMappingURL=itemRepo.d.ts.map