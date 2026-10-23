import { IComponentCollection } from "../../ComponentInterfaces/IComponentCollection";
export interface IComponentOperator {
    compListOfText?: Array<string>;
    setClassString(compColl: IComponentCollection, classString: string): void;
    getClassString(compColl: IComponentCollection): string;
    setTextAndMount?: (compColl: IComponentCollection, text: string) => void;
    getTextString?: (compColl: IComponentCollection) => string | undefined;
    applyStyle?: (compColl: IComponentCollection) => void;
    resetStyleCompCollection?: (compCollection: IComponentCollection) => void;
}
//# sourceMappingURL=IComponentOperator.d.ts.map