import { INestedStore } from "../designtimemodels/IStoreModel";
export declare class StoreHelper {
    static mergeObjects(nestedStore: INestedStore, findObjectCB: (objectId: string) => Promise<INestedStore | undefined>): Promise<void>;
}
//# sourceMappingURL=StoreHelper.d.ts.map