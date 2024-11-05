import { IComponentCollection } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IStyleManager } from "../../../../common/shrimp/interfaces/quick/IStyleManager";
import { IFontSettings } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
export declare class StyleManager implements IStyleManager {
    private static styleTag;
    private static themeTag;
    private static index;
    private static cssIndexDict;
    private static compStyleDict;
    static resetDict(): void;
    static clearStyleTag(): void;
    static createStyleTag(blokFontRequest?: boolean): void;
    static createFontFace(fonts?: Array<IFontSettings>, isSourceFromPath?: boolean): void;
    private static exceptionalComponents;
    private static decideCompStyleWithDict;
    static matchComponentStyles: (compCollection: IComponentCollection) => void;
    static convertUnit(value: string, percentage: number): number;
    private static getStyleNumberValue;
    private static addStyleRule;
    static deleteStyleSelector: (compCollection: IComponentCollection, stylePropName: string, breakPoint?: string | undefined) => void;
    static deleteCompCollectionStyle: (compCollection: IComponentCollection) => void;
    private static deleteSheet;
    private static addSheet;
    private static fromCamelCase;
}
//# sourceMappingURL=StyleManager.d.ts.map