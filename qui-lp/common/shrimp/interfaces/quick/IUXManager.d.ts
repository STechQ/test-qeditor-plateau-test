import { IPlateauUIObject } from "@stechquick/algae/lib/quick/IPlateauUI";
import { IContextItem } from "../../context";
import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
export declare const UXManagerContextName: string;
export interface IUXManager extends IContextItem {
    getThemeList(): Array<string> | undefined;
    setTheme(themeName: string, style?: IPlateauUIObject): void;
    addTheme(themeName: string, style?: IPlateauUIObject): void;
    removeTheme(themeName: string, style?: IPlateauUIObject): void;
    setDarkTheme?: (comCollection: IComponentCollection, isDark: boolean) => void;
}
//# sourceMappingURL=IUXManager.d.ts.map