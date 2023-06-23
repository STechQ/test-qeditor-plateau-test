export declare type TokenType = (typeof Token.Types)[keyof typeof Token.Types];
export interface IPosition {
    line: number;
    column: number;
}
export declare class Token {
    static reservedIdentifierTypes: {
        response: string;
        data: string;
        true: string;
        false: string;
        null: string;
    };
    static Types: {
        readonly identifier: "identifier";
        readonly keyword: "keyword";
        readonly string: "string";
        readonly number: "number";
        readonly operator: "operator";
    };
    type: TokenType;
    value: any;
    position: IPosition;
    endPosition?: IPosition;
    constructor(type: TokenType, value: any, position: IPosition, endPosition?: IPosition);
    Summarize(): string;
}
//# sourceMappingURL=Token.d.ts.map