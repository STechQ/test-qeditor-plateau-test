import { ICompJson } from "../../../../shrimp/interfaces/ComponentInterfaces/ICompJson";
import { IQJSon } from "../../../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { IDory } from "../../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { ScriptLang } from "../../../../shrimp/interfaces/Scripting/scriptLang";
import { IModuleManager } from "../../interfaces/construction/IModuleManager";
export declare type justQJsonCPart = {
    cJson: Array<ICompJson>;
};
declare type IPromiseList = Array<{
    prom: Promise<IQJSon>;
    qJsonPath: string;
    result: number;
    subPromiseList?: Array<IPromiseList>;
}>;
export declare class QJsonCollector {
    moduleManager: IModuleManager;
    constructor({ moduleManager }: {
        moduleManager: IModuleManager;
    });
    collectQJson(cJson: Array<ICompJson | null>, dory: IDory, qjsonRetrieve: (qJsonPath: string, fixSyncResolve?: boolean) => Promise<IQJSon>, qLang?: ScriptLang): Promise<IPromiseList | null>;
}
export {};
//# sourceMappingURL=QJsonCollector.d.ts.map