import { ContextManager } from "../../../../shrimp/context";
import { TSComponentBase } from "../../../../shrimp/interfaces/ComponentInterfaces/TSComponentBase";
import { IDictionary } from "../../../../shrimp/interfaces/IDictionary";
export default class QTimer extends TSComponentBase {
    private props;
    private events;
    private parentInstance;
    private context;
    private timerId;
    private status;
    constructor({ props, events, parent, context }: {
        props: IDictionary<Object>;
        events: IDictionary<Function>;
        parent: any;
        context: ContextManager;
    });
    Render(): unknown;
    triggerInterval(): void;
    startTimerInterval(): void;
    start(): void;
    reStart(): void;
    stop(): void;
    set setTimerId(timerId: any);
    set setStatus(status: boolean);
    get getStatus(): boolean;
    hibernate(): void;
}
//# sourceMappingURL=QTimer.d.ts.map