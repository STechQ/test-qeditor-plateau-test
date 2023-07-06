import { IComponentInternalSI, IComponentStyleInlineInterface, IComponentStyleKey } from "../interfaces/ComponentInterfaces/IStyle";
export declare class StyleHelper {
    static styleDictHelper(compDefinition: IComponentStyleInlineInterface, cb: ({ currInline, styleKey, breakPoint }: {
        currInline: IComponentInternalSI;
        styleKey: IComponentStyleKey;
        breakPoint?: string;
    }) => void): void;
    static matchSizeValue(sizeString?: string): number;
}
//# sourceMappingURL=StyleHelper.d.ts.map