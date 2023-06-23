import { ContextManager } from "../../../shrimp/context";
import { Hook } from "../../../shrimp/helpers/hook";
import { ILRID } from "../../../shrimp/interfaces/ComponentInterfaces/ILocalResource";
import { IQJSon } from "../../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { IDictionary } from "../../../shrimp/interfaces/IDictionary";
import { INavigationDemand } from "../../../shrimp/interfaces/quick/INavigationDemand";
import { PlatformType } from "../../../shrimp/interfaces/quick/IPlatform";
import { ISiteSettings } from "../../../shrimp/interfaces/quick/ISiteSettings";
import { DisplayHookCb, IDory, PartialDisplayHookCb } from "../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { IPageCompletedCb, IPageRenderStartedCb } from "../../../shrimp/interfaces/RenderingInterfaces/ILifeCycleCb";
import { IDoryRenderer, IRenderer, ISettingsQJsonContext } from "../../../shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IRendererOperatorCollection } from "../../../shrimp/interfaces/RenderingInterfaces/Operators/IRendererOperatorCollection";
import { DoryRendererChild } from "./RendererChild";
export declare class Renderer implements IRenderer {
    context: ContextManager;
    protected Dory: IDory;
    settingsQJsons: ISettingsQJsonContext;
    readonly BeforeRenderStartHook: Hook<() => void>;
    get PageCompletedHook(): Hook<IPageCompletedCb>;
    get PageRenderStartedHook(): Hook<IPageRenderStartedCb>;
    get DisplayHook(): Hook<DisplayHookCb>;
    constructor({ context, doryInstanceName, operatorCollection }: {
        context: ContextManager;
        doryInstanceName?: string;
        operatorCollection: IRendererOperatorCollection;
    });
    Render({ pjsonPath, compParentInst, storeItems, pageId, pageName, pjsonContent }: {
        pjsonPath?: string;
        compParentInst?: any;
        storeItems?: IDictionary<any>;
        pageId?: string;
        pageName?: string;
        pjsonContent?: IQJSon;
    }): Promise<void>;
    CreateChildRenderer(compUIDPrefix?: string): DoryRendererChild;
    SetLRType(LRType?: string): void;
    SetGlobalLRDict(GlobalLRDict?: ILRID): void;
    SetSiteSettings(siteSettings: ISiteSettings): void;
    SetPlatformType(platformType: PlatformType): void;
    SetDisplayCallBack(callBackFunc: DisplayHookCb): void;
    SetPartialDisplayCallBack(callBackFunc: PartialDisplayHookCb): void;
    GetNavigationDemand(pageId: string): INavigationDemand | null;
    GoHistory(navigationDemand: INavigationDemand): void;
    Back(): void;
    Forward(): void;
    Clear(): void;
    Hibernate(): void;
    CheckComponent({ compName }: {
        compName: string;
    }): Promise<any> | undefined;
    GetComponentCollection(): Record<string, import("../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection").IComponentCollection> | null;
    private getPageName;
    Trigger(eventName: string, parameters: Record<string, any>): any;
    SetEditMode(state: boolean): void;
}
export declare class DoryRenderer extends Renderer implements IDoryRenderer {
    get DoryInst(): IDory;
}
//# sourceMappingURL=Renderer.d.ts.map