import { ICompJson } from "../../../../shrimp/interfaces/ComponentInterfaces/ICompJson";
import { IQJSon } from "../../../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { IDory } from "../../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { ScriptLang } from "../../../../shrimp/interfaces/Scripting/scriptLang";
import { IModuleManager } from "../../interfaces/construction/IModuleManager";
import { IDoryJr } from "../../../../shrimp/interfaces/RenderingInterfaces/IDoryJr";
import { IQJsonCollectionResult } from "../../../../shrimp/interfaces/quick/IShellConfiguration";
import { IModelCacheItem, ModelDictCache } from "../../../../qshell/src/helpers/ModelDictCache";
export interface IModelDependentModel {
    raw: IModelCacheItem["raw"];
    type: IModelCacheItem["type"];
    id: IModelCacheItem["id"];
}
export declare type IQjsonPoolItem = {
    qjson: IQJSon;
    dm: Array<IModelDependentModel>;
};
export declare type justQJsonCPart = {
    cJson: Array<ICompJson>;
};
export declare class QJsonCollector {
    moduleManager: IModuleManager;
    testData: Array<string>;
    constructor({ moduleManager }: {
        moduleManager: IModuleManager;
    });
    collectQJson(qjsonPoolItem: IQjsonPoolItem, qjsonPath: string | undefined, dory: IDory, qjsonRetrieve: (qJsonPath: string) => Promise<IQjsonPoolItem>, cacheDict: ModelDictCache, doryJr: IDoryJr | undefined, options: {
        qLang?: ScriptLang;
        level?: number;
    }): Promise<IQJsonCollectionResult>;
    private handleMasterPage;
}
//# sourceMappingURL=QJsonCollector.d.ts.map