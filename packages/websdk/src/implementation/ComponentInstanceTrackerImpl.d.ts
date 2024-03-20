import { QShell } from "../../../../common/qshell";
import { ContextManager } from "../../../../common/shrimp/context";
import { CType } from "../../../../common/shrimp/interfaces/ComponentInterfaces/ICompJson";
import { IComponentCollection } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IComponentInstanceTracker } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentInstanceTracker";
import { ICreatedComponent } from "../../../../common/shrimp/interfaces/ComponentInterfaces/ICreatedComponent";
import { IDictionary } from "../../../../common/shrimp/interfaces/IDictionary";
import { IContainerServicesWrapper } from "../../../../common/shrimp/interfaces/quick/IContainerServices";
import { IWebSDKSettingsWrapper } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
export declare class ComponentInstanceTracker implements IComponentInstanceTracker {
    contextName: string;
    private servicesWrapper;
    private settingsWrapper;
    private websdkContext;
    private qshell;
    constructor(options: {
        servicesWrapper: IContainerServicesWrapper;
        settingsWrapper: IWebSDKSettingsWrapper;
        websdkContext: ContextManager;
        qshell: QShell;
    });
    TrackCompInstance(compData: {
        asChildType: CType | null;
        component: ICreatedComponent;
        compCollection: IComponentCollection;
        attrs: any;
        postRenderExecutor: (callBack: () => void) => void;
        props: IDictionary<any>;
    }): void;
    private newCompInstanceAndDomTracker;
    /**
     * Look child component slotType and fix it to the right place where it's needed to be real place which can be found in vnode.data.slot
     * @param compInstance Component instance that will be looked on its children
     */
    private fixSlotsFromDefault;
    private componentDomLocator;
    /**
     * Listen component dom changes on this method
     * @returns key fields
     */
    static componentDOMListeners(): Record<string, (componentCollection: IComponentCollection) => void>;
}
//# sourceMappingURL=ComponentInstanceTrackerImpl.d.ts.map