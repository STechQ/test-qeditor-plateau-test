import { ContextManager } from "../../../../shrimp/context";
import { IDynamicPropComponent } from "../../../../shrimp/interfaces/ComponentInterfaces/IDynamicComponentProp";
import { IExternalEvents } from "../../../../shrimp/interfaces/ComponentInterfaces/IExternalEvents";
import { IExternalProp } from "../../../../shrimp/interfaces/ComponentInterfaces/IExternalProp";
import { IQJSon } from "../../../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { TSComponentBase } from "../../../../shrimp/interfaces/ComponentInterfaces/TSComponentBase";
import { IDictionary } from "../../../../shrimp/interfaces/IDictionary";
import { PartialDisplayHookCb } from "../../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { IDoryJr } from "../../../../shrimp/interfaces/RenderingInterfaces/IDoryJr";
import { RenderingContext } from "../../Context/RenderingContext";
import { Dory } from "../../Dory";
import { IContextTargetInst } from "../../../../shrimp/interfaces/quick/IStore";
export default class CustomComponent extends TSComponentBase implements IDynamicPropComponent {
    protected qJsonPath: string;
    protected props: IDictionary<any>;
    protected events: IDictionary<Function>;
    protected parentInstance: any;
    protected dory: Dory | undefined;
    doryJr: IDoryJr | undefined;
    protected context: ContextManager;
    protected containerView: unknown;
    protected renderingContext: RenderingContext;
    protected tsWrapperInstance?: any;
    protected displayCb: PartialDisplayHookCb | undefined;
    private compQJson?;
    private eventCompletionPromise?;
    depTree: Record<string, {
        instanceHolder: IContextTargetInst;
        field: string;
        depScriptValue: string | object | undefined;
    }>;
    constructor({ props, events, parent, context }: {
        props: IDictionary<any>;
        events: IDictionary<Function>;
        parent: any;
        context: ContextManager;
    });
    getQJson(doryJr: IDoryJr): Promise<IQJSon | undefined>;
    set QJsonPath(_qjsonPath: string);
    get QJsonPath(): string;
    Render(tsWrapperInstance?: any, pageId?: string, pageName?: string): unknown;
    private fetchAndRender;
    private OutBoundProps;
    private innerRender;
    GetProps(propsCB: (props?: Array<IExternalProp>) => void): Promise<void>;
    GetEvents(eventsCB: (events?: Array<IExternalEvents>) => void): Promise<void>;
    GetQJson(): Promise<IQJSon | undefined> | IQJSon | undefined;
    $destroy(): void;
}
//# sourceMappingURL=CustomComponent.d.ts.map