import { IComponentCollection } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IStyleManager, StyleCB } from "../../../../common/shrimp/interfaces/quick/IStyleManager";
export declare class StyleManager implements IStyleManager {
    private static styleTag;
    private static index;
    private static cssIndexDict;
    static compStyleDict: Record<string, StyleCB>;
    static resetDict(): void;
    static createStyleTag(): void;
    static exceptionalComponents: {
        Tooltip: string;
    };
    static decideCompStyleWithDict: ({ compCollection, currCompStyle, stylePropName, styleValue, breakPoint }: {
        compCollection: IComponentCollection;
        currCompStyle: StyleCB;
        stylePropName: string;
        styleValue: string;
        breakPoint?: string | undefined;
    }) => void;
    static matchComponentStyles: (compCollection: IComponentCollection) => void;
    static matchStyleValue: ({ selector, selectorValue, styleValue, breakPoint, compType }: {
        selector: string;
        selectorValue: string;
        styleValue: string;
        breakPoint?: string | undefined;
        compType: string;
    }) => void;
    static addStyleRule: ({ selector, selectorValue, styleValue, breakPoint, compType }: {
        selector: string;
        selectorValue: string;
        styleValue: string;
        breakPoint?: string | undefined;
        compType: string;
    }) => void;
    static deleteStyleSelector: (compCollection: IComponentCollection, stylePropName: string, breakPoint?: string | undefined) => void;
    private static deleteStyleRule;
    static fromCamelCase: (message: string) => string;
    static matchSizeMinValue(sizeString?: string): string;
    static matchSizeMaxValue(sizeString?: string): string;
}
//# sourceMappingURL=StyleManager.d.ts.map