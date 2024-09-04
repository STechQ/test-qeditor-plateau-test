import { IQJSon } from "../../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { PartialDisplayHookCb } from "../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { IDoryJr } from "../../../shrimp/interfaces/RenderingInterfaces/IDoryJr";
import { IDoryRendererChild, IRendererChild } from "../../../shrimp/interfaces/RenderingInterfaces/IRenderer";
import { Renderer, DoryRenderer } from "./Renderer";
export declare class RendererChild implements IRendererChild {
    protected doryJr: IDoryJr;
    protected doryRenderer: DoryRenderer;
    constructor(renderer: Renderer, compUIDPrefix?: string);
    SetCallbackDisplay(callBackFunc: PartialDisplayHookCb): void;
    Render(options: {
        qjson: IQJSon;
        props?: Record<string, any>;
        events?: Record<string, Function>;
        compParentInst: any;
        storeItems?: Record<string, any>;
        pageId?: string;
        pageName?: string;
        noHistory?: boolean;
    }): Promise<void>;
}
export declare class DoryRendererChild extends RendererChild implements IDoryRendererChild {
    get DoryJrInst(): IDoryJr;
}
//# sourceMappingURL=RendererChild.d.ts.map