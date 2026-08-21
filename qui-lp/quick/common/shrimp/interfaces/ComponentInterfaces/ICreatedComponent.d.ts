import { IComponent } from "./IComponent";
import { IVnode } from "./IVnode";
import { IDomElement } from "../RenderingInterfaces/IDomElement";
import { CompGroupType } from "../quick/IWebSDK";
export interface ICreatedComponent {
    instance?: IComponent;
    el?: IDomElement;
    vel?: IVnode;
    compGroupType?: CompGroupType;
    lockedFields?: Record<string, boolean>;
}
//# sourceMappingURL=ICreatedComponent.d.ts.map