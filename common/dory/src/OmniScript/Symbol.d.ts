declare class Symbol {
    static Types: {
        string: string;
        number: string;
        object: string;
        native: string;
        boolean: string;
        array: string;
        date: string;
        null: string;
    };
    name: any;
    value: any;
    type: any;
    constructor(name: any, value: any, type: any, evalContext: any);
    AssignValue(indexerName: any, value: any, type: any, assignerNode: any, evalContext: any): any;
    GetValue(indexerName: any, retrieverNode: any, evalContext: any): any;
    CallFunction(indexerName: any, parameterSymbols: any, responsibleNode: any, evalContext: any): any;
    IsArrayAccess(indexerName: any, responsibleNode: any, evalContext: any): boolean;
    AssignSymbol(indexerName: any, symbol: any, assignerNode: any, evalContext: any): void;
    Equals(symbol: any): any;
    GetString(): any;
    GetBoolean(): boolean;
    GetNumber(): any;
}
export { Symbol };
//# sourceMappingURL=Symbol.d.ts.map