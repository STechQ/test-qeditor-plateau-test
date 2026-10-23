import { Context } from "../core/context";
import { ICompositor } from "./ICompositor";
export declare class Regex implements ICompositor {
    private readonly context;
    private inputValue;
    constructor(context: Context);
    compose(): void;
    getUnmaskedValue(): string;
}
//# sourceMappingURL=regex.d.ts.map