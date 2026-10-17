import { IStoreModelForService } from "../../store/designtimemodels/IStoreModel";
import { ISoapServiceV2Model } from "../runtimeModels/ISoapServiceModel";
import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
export interface ISoapServiceV2Design extends IModelBaseFields, ISoapServiceV2Model {
    store: IStoreModelForService;
}
//# sourceMappingURL=ISoapServiceV2.d.ts.map