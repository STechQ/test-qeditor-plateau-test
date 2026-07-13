import { Store } from "../everything/store/designtimemodels/IStoreModel";
import { IDataModelBase } from "../everything/studio/ui/IStudioUIModelBase";
type findObjectCBType = (objectId: string) => Promise<any>;
export declare const generateFlowIntellisense: (models: {
    dataTypeModels?: Array<IDataModelBase>;
    dataSetModels?: Array<IDataModelBase>;
}, findObjectCB: findObjectCBType, options: {
    store?: Store;
}) => Promise<string>;
export {};
//# sourceMappingURL=intelliSenseHelper.d.ts.map