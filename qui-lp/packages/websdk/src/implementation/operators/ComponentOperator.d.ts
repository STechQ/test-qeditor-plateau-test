import { IComponentCollection } from "../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IComponentOperator } from "../../../../../common/shrimp/interfaces/RenderingInterfaces/Operators/IComponentOperator";
export declare class ComponentOperator implements IComponentOperator {
    constructor();
    compListOfText: string[];
    setClassString(compColl: IComponentCollection, classString: string): void;
    getClassString(compColl: IComponentCollection): string;
    setTextAndMount(compColl: IComponentCollection, text: string): void;
    getTextString(compColl: IComponentCollection): string | undefined;
    applyStyle(compColl: IComponentCollection): void;
    resetStyleCompCollection(compCollection: IComponentCollection): void;
}
//# sourceMappingURL=ComponentOperator.d.ts.map