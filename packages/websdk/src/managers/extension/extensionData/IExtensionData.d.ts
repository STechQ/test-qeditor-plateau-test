import { IComponentCollection } from "../../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
export interface IExtensionData {
    create(compCollection: IComponentCollection, attrs: any): void;
    extensionDictionary: Record<string, (componentCollection: IComponentCollection, params: any) => any>;
}
//# sourceMappingURL=IExtensionData.d.ts.map