import { ContextManager } from "../../../../shrimp/context";
import { TSComponentBase } from "../../../../shrimp/interfaces/ComponentInterfaces/TSComponentBase";
import { IDictionary } from "../../../../shrimp/interfaces/IDictionary";
import { IDomElement } from "../../../../shrimp/interfaces/RenderingInterfaces/IDomElement";
export default class Messaging extends TSComponentBase {
    private props;
    private events;
    private parentInstance;
    private doryLike;
    private context;
    constructor({ props, events, parent, context }: {
        props: IDictionary<unknown>;
        events: IDictionary<Function>;
        parent: any;
        context: ContextManager;
    });
    Render(): IDomElement;
    resurrect(): void;
    private setHistoryMaster;
    restored(): void;
}
//# sourceMappingURL=Messaging.d.ts.map