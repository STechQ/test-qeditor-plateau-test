import { IContextItem } from "../../../../shrimp/context";
import { IFormattingDefinition } from "../../../../shrimp/interfaces/quick/IFormattingDefinition";
export declare const RegionalManagerContextName: string;
export interface IRegionalManager extends IContextItem {
    getRegionList(): Array<string>;
    getRegion(): string;
    setRegion(currentRegion: string): void;
    getFormattingDefinitionByCurrentRegion(): IFormattingDefinition | undefined;
    onLRChange?: (region?: string) => void;
}
//# sourceMappingURL=IRegionalManager.d.ts.map