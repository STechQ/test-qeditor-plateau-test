export interface ITextPosition {
    lineNumber: number;
    column: number;
}
export declare class TextPositionResolver {
    static getLineColumnAtIndex(text: string, index: number): ITextPosition;
    static getIndexFromLineColumn(text: string, lineNumber: number, column: number): number;
}
//# sourceMappingURL=TextPositionResolver.d.ts.map