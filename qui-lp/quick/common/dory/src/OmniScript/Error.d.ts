export declare class OSError {
    message: string;
    source: string;
    node: string;
    constructor(source: any, message: any, node: any);
    static throwWithMessage(source: any, message: any, node: any): void;
    static errorWithMessage(source: any, message: any, node: any): void;
}
//# sourceMappingURL=Error.d.ts.map