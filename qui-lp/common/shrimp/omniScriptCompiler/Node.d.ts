import { Token } from "./Token";
export declare type Forest = Array<node>;
declare class node {
    token: Token;
    left: node | Array<Forest | null> | Forest | null;
    right: node | Array<Forest | null> | Forest | null;
    parent: node | Array<Forest | null> | Forest | null;
    TokObject: any;
    constructor(token: Token);
    Summarize(): string;
    ShortSummarize(): string;
}
export { node as Node };
//# sourceMappingURL=Node.d.ts.map