import { IContextItem } from "../../../../shrimp/context";
import { IQJSon } from "../../../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { MobileAnimationType } from "../../../../shrimp/interfaces/quick/INavigationManager";
import { IDory } from "../../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { IDoryJr } from "../../../../shrimp/interfaces/RenderingInterfaces/IDoryJr";
import { IModuleManager } from "../../interfaces/construction/IModuleManager";
import { IQJsonRetriever } from "../../interfaces/construction/IQJsonRetriever";
export declare class QJsonPool implements IContextItem {
    static contextName: string;
    contextName: string;
    private qJsonPool;
    private qjsonRetriever;
    private qjsonCollector;
    private moduleManager;
    private cacheDict;
    constructor({ qjsonRetriever, moduleManager, cacheDict }: {
        qjsonRetriever: IQJsonRetriever;
        moduleManager: IModuleManager;
        cacheDict: any;
    });
    ResetPool(): void;
    get ModuleManager(): IModuleManager;
    retrieveAndFillQjsonAsync({ qjson, dory, doryJr }: {
        qjson: QjsonData;
        dory: IDory;
        doryJr?: IDoryJr;
    }): Promise<import("../../../../shrimp/interfaces/quick/IShellConfiguration").IQJsonCollectionResult>;
    getCJson(qjsonPath: string): IQJSon | undefined;
}
export type QjsonData = {
    type: "content";
    content: IQJSon;
    options?: {
        disableLoading?: boolean;
        mobileAnimation?: MobileAnimationType;
    };
} | {
    type: "path";
    path: string;
    options?: {
        disableLoading?: boolean;
        mobileAnimation?: MobileAnimationType;
    };
};
//# sourceMappingURL=QJsonPool.d.ts.map