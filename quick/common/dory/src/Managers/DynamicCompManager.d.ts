import { ContextManager } from "../../../shrimp/context";
import { ElementLocation } from "../../../shrimp/interfaces/ComponentInterfaces/ElementLocation";
import { IComponentCollection } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { ICreatedDynamicComp, IDynamicChildrenCreator, IDynamicCompCreator } from "../../../shrimp/interfaces/RenderingInterfaces/IRenderer";
import { HistoryItem } from "../Model/History/HistoryItem";
export declare class DynamicCompManager {
    static _itemCounter: number;
    static get itemCounter(): number;
    static set itemCounter(v: number);
    /**
     * Create a new component from given template json
     * @param historyItem Current history item of the rendering
     * @returns Created component collection
     */
    static createDynamicComp(params: IDynamicCompCreator): ICreatedDynamicComp | undefined;
    static createDynamicChildren(params: IDynamicChildrenCreator): ICreatedDynamicComp[] | undefined;
    static appendDynamicCreatedComp({ newComponents, parentComp, context, place, historyItem, childName }: {
        newComponents: Array<IComponentCollection>;
        parentComp?: IComponentCollection;
        context: ContextManager;
        place?: ElementLocation;
        historyItem: HistoryItem;
        childName: string;
    }): void;
    static generateCompID(sourceCompID: string, dynamicCompIdSuffix: string | undefined): string;
    /**
     * Deep copy the templateJson and create a new RenderingManager and render the new component
     * @param historyItem Current history item of the rendering
     * @param templateJson Template json of the new component
     * @param newCompID Creaetd component key id. New id will be: compJson.id + '_' + newCompID
     * @returns New componentcollection by new id
     */
    private static createComp;
    /**
     * Find the parent component which can be rendered
     * If there is no parent, return undefined
     * @param historyItem Current history item of the rendering
     * @param parentLocation Parent location to find the porent from the json
     * @returns parent component collection or undefined
     */
    private static renderedParentComp;
    private static deletePropRender;
}
//# sourceMappingURL=DynamicCompManager.d.ts.map