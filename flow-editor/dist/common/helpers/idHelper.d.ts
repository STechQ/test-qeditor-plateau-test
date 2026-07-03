import { PersonaModelType, PrivilegeModelType, RoleModelType } from "../everything/accessmanager/types";
import { ActionModelType } from "../everything/action/types";
import { ModelType } from "../everything/studio/ui/IStudioUIModelBase";
import { SwimlaneModelType } from "../everything/accessmanager/types";
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
    static embedIdNestedType(modelId: string, objectId: string, type: RoleModelType | SwimlaneModelType | PrivilegeModelType | PersonaModelType | ActionModelType): string;
    static embedIdNestedTypeWithAppId(modelId: string, objectId: string, appId: string, type: PersonaModelType | SwimlaneModelType): string;
    static extractIdNestedType(str: string): {
        modelType: string;
        modelId: string;
        objectId: string;
    } | undefined;
    static extractIdNestedTypeWithAppId(str: string): {
        modelType: string;
        appId: string;
        modelId: string;
        objectId: string;
    } | undefined;
    private static appIdFormatError;
    static isIdWithType(str: string): boolean;
    static isIdWithAppIdAndType(str: string): boolean;
}
//# sourceMappingURL=idHelper.d.ts.map