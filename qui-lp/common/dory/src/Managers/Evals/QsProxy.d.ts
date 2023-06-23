import { IComponentCollection } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IDictionary } from "../../../../shrimp/interfaces/IDictionary";
import { IGlobalsQS } from "../../../../shrimp/interfaces/Scripting/IGlobals";
import { Dory } from "../../Dory";
import { MessagingManager } from "../MessagingManager";
export declare class QSProxy {
    functionDict: IDictionary<Function>;
    CreateMethodProxy(func: Function): void;
    CreateAssignProxy(func: (fieldName: string, value: any) => void): void;
    CreateGetValueProxy(func: (fieldName: string) => any): void;
    mountOnObject(mountObject: object): void;
}
export declare class QsProxyGenerator {
    constructor();
    generateProxies(globals: IGlobalsQS, messagingManager: MessagingManager, dory: Dory, ownerComponent?: IComponentCollection): void;
    globalProxyGenerator({ proxyObject, objectDict, fieldKey, ownerComp }: {
        proxyObject: IDictionary<any>;
        objectDict: IDictionary<any>;
        fieldKey: string;
        ownerComp?: IComponentCollection;
    }): void;
}
//# sourceMappingURL=QsProxy.d.ts.map