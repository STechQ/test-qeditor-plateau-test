declare class dNode {
    static TokenTypes: {
        identifier: string;
        keyword: string;
        string: string;
        number: string;
        operator: string;
    };
    token: any;
    left: any;
    right: any;
    parent: any;
    leftArray: any;
    rightArray: any;
    array: any;
    constructor(tokenValue: any);
    LoadToken(tokenValue: any): void;
    IsLeftArray(): boolean;
    IsRightArray(): boolean;
    IsRightNull(): boolean;
    IsLeftNull(): boolean;
    IsArray(): boolean;
    IsNode(): boolean;
    PushToArray(newNode: any): void;
    AppendLeft(newNode: any): void;
    AppendRight(newNode: any): void;
}
export { dNode as DNode };
//# sourceMappingURL=DNode.d.ts.map