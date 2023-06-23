export declare class EventHelper<EventDict extends Record<string, (...params: Array<any>) => void>> {
    private subscriptions;
    subscribe<K extends keyof EventDict>(eventName: K, cb: EventDict[K]): void;
    trigger<K extends keyof EventDict, T extends EventDict[K]>(eventName: K, ...params: Parameters<T>): void;
    unsubscribe<K extends keyof EventDict>(eventName: K, cb: EventDict[K]): void;
}
//# sourceMappingURL=eventHelper.d.ts.map