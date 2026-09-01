import { IExternalEvents } from "./IExternalEvents";
import { IExternalProp } from "./IExternalProp";
import { IQJSon } from "./IQJson";
export interface IDynamicPropComponent {
    GetProps(propsCB: (props?: Array<IExternalProp>) => void): void;
    GetEvents(eventsCB: (events?: Array<IExternalEvents>) => void): void;
    GetQJson?: (() => Promise<IQJSon | undefined> | IQJSon | undefined);
}
//# sourceMappingURL=IDynamicComponentProp.d.ts.map