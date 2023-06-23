import { IDictionary } from "../IDictionary";
export declare class TSComponentBase {
    selfEvents: IDictionary<Function>;
    constructor({ events, selfEventList }: {
        events: IDictionary<Function>;
        selfEventList: Array<string>;
    });
    emit(eventName: string, ...args: Array<Object>): any;
}
//# sourceMappingURL=TSComponentBase.d.ts.map