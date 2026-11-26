import { IHistoryAdditionalItem } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IHistoryItem";
export declare class NextSiblingAdditional implements IHistoryAdditionalItem {
    nextSiblingList?: ChildNode[] | undefined;
    static additionalName: string;
    constructor(nextSiblingList?: ChildNode[] | undefined);
    destroy(): void;
    hibernate(): void;
    resurrect(): void;
}
export declare class AppComputedAdditional implements IHistoryAdditionalItem {
    appComputed?: {
        paddingTop: string;
        paddingBottom: string;
    } | undefined;
    static additionalName: string;
    constructor(appComputed?: {
        paddingTop: string;
        paddingBottom: string;
    } | undefined);
    destroy(): void;
    hibernate(): void;
    resurrect(): void;
}
//# sourceMappingURL=AdditionalType.d.ts.map