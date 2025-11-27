import { ICompJson } from "../../../../shrimp/interfaces/ComponentInterfaces/ICompJson";
import { IQJSon } from "../../../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { IDory } from "../../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { ScriptLang } from "../../../../shrimp/interfaces/Scripting/scriptLang";
import { IModuleManager } from "../../interfaces/construction/IModuleManager";
import { IDoryJr } from "../../../../shrimp/interfaces/RenderingInterfaces/IDoryJr";
import { IQJsonCollectionResult } from "../../../../shrimp/interfaces/quick/IShellConfiguration";
export declare type justQJsonCPart = {
    cJson: Array<ICompJson>;
};
export declare class QJsonCollector {
    moduleManager: IModuleManager;
    constructor({ moduleManager }: {
        moduleManager: IModuleManager;
    });
    collectQJson(qjson: IQJSon, qjsonPath: string | undefined, dory: IDory, qjsonRetrieve: (qJsonPath: string) => Promise<IQJSon>, doryJr: IDoryJr | undefined, options: {
        qLang?: ScriptLang;
        level?: number;
    }): Promise<IQJsonCollectionResult>;
    private handleMasterPage;
}
//# sourceMappingURL=QJsonCollector.d.ts.map