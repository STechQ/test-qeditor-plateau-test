import { IComponentCollection } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IStyleManager, StyleCB, matchStyle } from "../../../../common/shrimp/interfaces/quick/IStyleManager";
export declare class StyleManager implements IStyleManager {
    private static styleTag;
    private static index;
    private static cssIndexDict;
    static compStyleDict: Record<string, StyleCB>;
    static resetDict(): void;
    static clearStyleTag(): void;
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
    static getStyleNumberValue(value: any): {
        value: any;
        suffix: any;
    };
    static addStyleRule: (matchStyleParam: matchStyle) => void;
    static deleteStyleSelector: (compCollection: IComponentCollection, stylePropName: string, breakPoint?: string | undefined) => void;
    static deleteCompCollectionStyle: (compCollection: IComponentCollection) => void;
    private static deleteSheet;
    private static addSheet;
    static fromCamelCase: (message: string) => string;
}
//# sourceMappingURL=StyleManager.d.ts.map