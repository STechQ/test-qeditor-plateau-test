import { Context } from "../core/context";
import { ICompositor } from "./ICompositor";
export declare class Decimal implements ICompositor {
    private readonly context;
    private numberValue;
    private _maskedValue;
    private _unmaskedValue;
    private _skipInputEvent;
    private _isMinValueSet;
    private _isPasted;
    private _enforceOnInput;
    constructor(context: Context);
    compose(): void;
    private setMinValueOnBlur;
    private changeValue;
    private formatValue;
    private compareNumbers;
    getUnmaskedValue(): string;
    private unMask;
    private validate;
    private convertToNumber;
    private alignDigits;
    private deleteLeadingZero;
    private deleteBeforeNegativeSymbol;
}
//# sourceMappingURL=decimal.d.ts.map