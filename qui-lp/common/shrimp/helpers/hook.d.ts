declare type HookCallBack = (...args: Array<any>) => void;
export declare class Hook<T extends HookCallBack> {
    private subscribers;
    private postSubscribers?;
    private hookName;
    private hookState;
    private triggerPostSubscribersWithCb;
    private hookStateListeners;
    get TriggerPostSubscribersWithCb(): boolean;
    set TriggerPostSubscribersWithCb(v: boolean);
    get subscriberCount(): number;
    get hasSubscribers(): boolean;
    get hasPostSubscribers(): boolean;
    get triggerer(): T;
    constructor(hookName: string, options?: {
        manageState?: boolean;
        triggerPostSubscribersWithCb?: boolean;
    });
    private trigger;
    private tryTriggerSubscriber;
    private getHookName;
    ResetAndStartState(): void;
    DisableState(): void;
    IsTriggered(): boolean;
    triggerPostSubscribers(...args: Array<any>): void;
    subscribe(cb: T): void;
    unsubscribe(cb: T): void;
    clearSubscribers(): void;
    postSubscribe(cb: T): void;
    postUnsubscribe(cb: T): void;
    clearPostSubscribers(forced?: boolean): void;
    listenHookState(cb: T): void;
    forceClearAllSubscibers(): void;
}
export {};
//# sourceMappingURL=hook.d.ts.map