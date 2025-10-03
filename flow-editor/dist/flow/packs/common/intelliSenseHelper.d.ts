import { IVariable } from "../../../common/everything/dataType/runtimemodels/IVariable";
import { Store } from "../../../common/everything/store/designtimemodels/IStoreModel";
export declare const generateFlowIntellisense: (store: Store, dataTypeModels: Array<{
    ID: string;
    name: string;
}>, findObjectCB: (objectId: string) => Promise<Record<string, IVariable> | undefined>) => Promise<string>;
//# sourceMappingURL=intelliSenseHelper.d.ts.map