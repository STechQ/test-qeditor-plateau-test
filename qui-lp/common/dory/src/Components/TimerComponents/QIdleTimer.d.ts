import { ContextManager } from "../../../../shrimp/context";
import { TSComponentBase } from "../../../../shrimp/interfaces/ComponentInterfaces/TSComponentBase";
import { IDictionary } from "../../../../shrimp/interfaces/IDictionary";
import { IDomElement } from "../../../../shrimp/interfaces/RenderingInterfaces/IDomElement";
export default class QIdleTimer extends TSComponentBase {
    private props;
    private events;
    private parentInstance;
    private dory;
    private context;
    private idleTime;
    private idleTimer;
    private window;
    constructor({ props, events, parent, context }: {
        props: IDictionary<Object>;
        events: IDictionary<Function>;
        parent: any;
        context: ContextManager;
    });
    Render(): IDomElement;
    start(): void;
    clearTimer(): void;
    destroy(): void;
    resurrect(): void;
    restored(): void;
}
//# sourceMappingURL=QIdleTimer.d.ts.map