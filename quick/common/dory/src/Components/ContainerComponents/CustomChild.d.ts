import { ContextManager } from "../../../../shrimp/context";
import { IDynamicPropComponent } from "../../../../shrimp/interfaces/ComponentInterfaces/IDynamicComponentProp";
import { IExternalEvents } from "../../../../shrimp/interfaces/ComponentInterfaces/IExternalEvents";
import { IExternalProp } from "../../../../shrimp/interfaces/ComponentInterfaces/IExternalProp";
import { IVnode } from "../../../../shrimp/interfaces/ComponentInterfaces/IVnode";
import { TSComponentBase } from "../../../../shrimp/interfaces/ComponentInterfaces/TSComponentBase";
import { IDictionary } from "../../../../shrimp/interfaces/IDictionary";
import { PartialDisplayHookCb } from "../../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { IDoryJr } from "../../../../shrimp/interfaces/RenderingInterfaces/IDoryJr";
import { RenderingContext } from "../../Context/RenderingContext";
import { Dory } from "../../Dory";
export default class CustomChild extends TSComponentBase implements IDynamicPropComponent {
    protected props: IDictionary<any>;
    protected events: IDictionary<Function>;
    protected parentInstance: any;
    protected dory: Dory | undefined;
    doryJr: IDoryJr | undefined;
    protected childName: string;
    protected context: ContextManager;
    protected containerView: unknown;
    protected renderingContext: RenderingContext;
    protected customChilds: IDictionary<IVnode> | undefined;
    protected tsWrapperInstance?: any;
    protected displayCb: PartialDisplayHookCb | undefined;
    constructor({ props, events, parent, context }: {
        props: IDictionary<any>;
        events: IDictionary<Function>;
        parent: any;
        context: ContextManager;
    });
    Render(tsWrapperInstance?: any): unknown;
    set ChildName(_childName: string);
    get ChildName(): string;
    private updateRender;
    GetProps(propsCB: (props?: Array<IExternalProp>) => void): Promise<void>;
    GetEvents(eventsCB: (events?: Array<IExternalEvents>) => void): Promise<void>;
    $destroy(): void;
}
//# sourceMappingURL=CustomChild.d.ts.map