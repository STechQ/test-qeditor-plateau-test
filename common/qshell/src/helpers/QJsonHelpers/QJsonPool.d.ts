import { ContextManager, IContextItem } from "../../../../shrimp/context";
import { IQJSon } from "../../../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { MobileAnimation } from "../../../../shrimp/interfaces/quick/INavigationManager";
import { IDory } from "../../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { IModuleManager } from "../../interfaces/construction/IModuleManager";
import { IQJsonRetriever } from "../../interfaces/construction/IQJsonRetriever";
export declare class QJsonPool implements IContextItem {
    static contextName: string;
    contextName: string;
    private qJsonPool;
    private qjsonRetriever;
    private qjsonCollector;
    private moduleManager;
    private context;
    private _Dory;
    get Dory(): IDory;
    set Dory(v: IDory);
    constructor({ qjsonRetriever, moduleManager, context }: {
        qjsonRetriever: IQJsonRetriever;
        moduleManager: IModuleManager;
        context: ContextManager;
    });
    ResetPool(): void;
    get ModuleManager(): IModuleManager;
    retrieveAndFillQjsonAsync({ qjson, dory }: {
        qjson: QjsonData;
        dory: IDory;
    }): Promise<IQJSon>;
    getCJson(qjsonPath: string): IQJSon | undefined;
}
export declare type QjsonData = {
    type: "content";
    content: IQJSon;
    options?: {
        disableLoading?: boolean;
        mobileAnimation?: MobileAnimation;
    };
} | {
    type: "path";
    path: string;
    options?: {
        disableLoading?: boolean;
        mobileAnimation?: MobileAnimation;
    };
};
//# sourceMappingURL=QJsonPool.d.ts.map