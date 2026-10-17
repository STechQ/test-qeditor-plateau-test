import { PersonaModelType, PrivilegeModelType, RoleModelType } from "../everything/accessmanager/types";
import { ActionModelType } from "../everything/action/types";
import { ModelType } from "../everything/studio/ui/IStudioUIModelBase";
import { SwimlaneModelType } from "../everything/accessmanager/types";
export declare class IdHelper {
    static extractId(str: string): string;
    /**
     * B100 (C4-G8 Task 5) — [Codex-1 BLOCKER fix] idempotent/throw'suz bare-id normalize:
     * 2-parça `<<tip:id>>` → id; 3-parça `<<tip:appId:id>>` → SON segment (gerçek id — mevcut
     * `extractId` burada YANLIŞ olarak `appId:id`'yi olduğu gibi bırakır, bkz. yukarıdaki metod);
     * bare (sarmalsız) girdi → AYNEN döner; bozuk/yarım sarmal (`<<tip:` ile başlayıp `>>` ile
     * BİTMEYEN, ya da 2/3 dışında parça sayısı taşıyan) → `{ malformed: true }` — bare ile
     * KARIŞTIRILMAZ (çağıran `typeof result === "string"` ile ayırt eder). Mevcut `extractId`
     * DAVRANIŞI bu metottan ETKİLENMEZ (Codex-11 — çağrıcı riski, davranış değiştirilmedi); yeni
     * denetimler (B98 kabul kapısı, B102 deploy bütünlük denetimi, B99 dep birleşimi) YALNIZ bunu
     * kullanır.
     */
    static normalizeToBareId(str: string): string | {
        malformed: true;
    };
    static extractIdType(str: string | boolean): {
        modelType: string;
        id: string;
    } | undefined;
    static extractEmbeddedModelId(value: string): string | undefined;
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