import { IComponent } from "../ComponentInterfaces/IComponent";
import { IDomElement } from "../RenderingInterfaces/IDomElement";
export interface IVnode {
    componentInstance?: IComponent;
    componentOptions?: Object;
    elm?: IDomElement;
    tag?: string;
    data: {
        slot?: string;
        staticClass?: string;
        props?: Record<string, any>;
    };
    text?: string;
    children?: Array<IVnode>;
}
//# sourceMappingURL=IVnode.d.ts.map