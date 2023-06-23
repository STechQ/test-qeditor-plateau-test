import { IComponentCollection } from "../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
export declare class ComponentDOMAttrsHelper {
    /**
     * List of components that needs to set on the DOM
     */
    static componentDOMAttributes: Record<string, {
        [tag: string]: boolean;
    }>;
    /**
     * Create HTML attributes as property on component instance.
     * Listen changes on these properties to set attributes on the real field and mount the component again.
     * @param compCollection Component collection that attributes will be set on its instance
     */
    static createDOMAttrsOnCompInstance(compCollection: IComponentCollection): void;
    static convertTiffToImage(attribute: string): string;
    static AvoidClearableTabIndex(compCollection: any): void;
}
//# sourceMappingURL=ComponentDOMAttrsHelper.d.ts.map