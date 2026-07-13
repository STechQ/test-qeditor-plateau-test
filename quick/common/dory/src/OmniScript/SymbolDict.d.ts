import { IDictionary } from "../../../shrimp/interfaces/IDictionary";
import { Symbol } from "./Symbol";
declare class SymbolDict {
    symbolDict: IDictionary<Symbol>;
    Define(symbolName: any, value: any, type: any, evalContext: any): Symbol | null;
    Retrieve(symbolName: any): Symbol | null;
}
export { SymbolDict };
//# sourceMappingURL=SymbolDict.d.ts.map