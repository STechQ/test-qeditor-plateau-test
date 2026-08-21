import { Node } from "./Node";
export declare class QSCError extends Error implements QSCError {
    static ErrorName: string;
    constructor({ intelliMsg, message, stLine, stColumn, eLine, eColumn, responsibleNode }: {
        intelliMsg: string;
        message: string;
        stLine: number;
        stColumn: number;
        eLine: number;
        eColumn: number;
        responsibleNode?: Node;
    });
}
export interface QSCError extends Error {
    intelliMsg: string;
    stLine: number;
    stColumn: number;
    eLine: number;
    eColumn: number;
    responsibleNode?: Node;
}
//# sourceMappingURL=QSCError.d.ts.map