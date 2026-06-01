import { Context } from "./core/context";
import { ICompositor } from "./compositors/ICompositor";
export declare class InputFormat {
    private readonly context;
    readonly compDict: ICompositor;
    constructor(context: Context, compDict?: ICompositor);
    run(): void;
    getUnMaskedValue(): string;
}
//# sourceMappingURL=inputFormat.d.ts.map