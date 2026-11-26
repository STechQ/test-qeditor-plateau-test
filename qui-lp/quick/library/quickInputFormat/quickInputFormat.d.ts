import { IQuickInputFormatOptions } from "./externalInterfaces";
import { Context } from "./src/core/context";
export declare class QuickInputFormat {
    private readonly context;
    constructor(inputElm: HTMLInputElement | HTMLTextAreaElement, options: IQuickInputFormatOptions, context?: Context);
    run(): void;
    getUnmaskValue(): string;
}
//# sourceMappingURL=quickInputFormat.d.ts.map