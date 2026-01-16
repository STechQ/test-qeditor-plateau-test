import { IComponentInternalSI, IComponentStyleInlineInterface, IComponentStyleKey } from "../interfaces/ComponentInterfaces/IStyle";
export declare class StyleHelper {
    static styleDictHelper(compDefinition: IComponentStyleInlineInterface, cb: ({ currInline, styleKey, breakPoint }: {
        currInline: IComponentInternalSI;
        styleKey: IComponentStyleKey;
        breakPoint?: string;
    }) => void): void;
    static matchSizeValue(sizeString?: string): number;
    static additionalPropsFromStyle: propsFromStyleType;
}
export declare type propStyleArray = Record<string, Array<string>>;
export declare type propsFromStyleType = Record<string, propStyleArray>;
//# sourceMappingURL=StyleHelper.d.ts.map