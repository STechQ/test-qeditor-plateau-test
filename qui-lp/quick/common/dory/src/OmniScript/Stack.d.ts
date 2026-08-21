export declare enum StackReason {
    root = "root",
    if = "if",
    foreach = "foreach",
    string = "string"
}
export declare enum StackMessage {
    break = "break",
    continue = "continue"
}
export declare class Stack {
    private reason;
    get Reason(): StackReason;
    private message;
    get Message(): StackMessage | null;
    private contextIndex;
    get ContextIndex(): number | null;
    constructor({ reason }: {
        reason: StackReason;
    });
    setContextIndex(index: number): void;
    clearContextIndex(): void;
    setMessage(message: StackMessage): void;
    hasReturnMessage(): boolean;
}
//# sourceMappingURL=Stack.d.ts.map