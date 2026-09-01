import { IComponentCollection } from "../../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IDomElement } from "../../../../shrimp/interfaces/RenderingInterfaces/IDomElement";
export declare class IndexManager {
    private compIdPropIndex;
    private compDomIndex;
    constructor(controlDict: Record<string, IComponentCollection>);
    getComponentCollectionByIdProperty(compPropId: string): IComponentCollection | undefined;
    getComponentCollectionByDom(element: IDomElement): IComponentCollection | undefined;
}
//# sourceMappingURL=IndexManager.d.ts.map