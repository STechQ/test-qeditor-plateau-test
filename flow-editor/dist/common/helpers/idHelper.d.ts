import { ModelType } from "../everything/studio/ui/IStudioUIModelBase";
export declare class IdHelper {
    static extractId(str: string): string;
    static extractIdType(str: string | boolean): {
        modelType: string;
        id: string;
    } | undefined;
    static embedIdType(id: string, type: ModelType): string;
    static embedIdTypeWithAppId(appId: string, modelId: string, type: ModelType): string;
    static extractIdTypeWithAppId(str: string): {
        appId: string | undefined;
        modelId: string;
        modelType: ModelType | undefined;
    };
}
//# sourceMappingURL=idHelper.d.ts.map