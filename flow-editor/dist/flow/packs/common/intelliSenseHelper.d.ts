import { IVariable } from "../../../common/everything/dataType/runtimemodels/IVariable";
import { Store } from "../../../common/everything/store/designtimemodels/IStoreModel";
import { IStudioUIModelBase } from "../../../common/everything/studio/ui/IStudioUIModelBase";
export declare const generateFlowIntellisense: (store: Store, dataTypeModels: Array<IStudioUIModelBase>, findObjectCB: (objectId: string) => Promise<Record<string, IVariable> | undefined>) => Promise<string>;
//# sourceMappingURL=intelliSenseHelper.d.ts.map