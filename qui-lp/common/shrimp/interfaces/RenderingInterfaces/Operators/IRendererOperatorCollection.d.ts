import { IComponentOperator } from "./IComponentOperator";
import { IEventOperator } from "./IEventOperator";
import { ILoadingOperator } from "./ILoadingOperator";
import { IAuthenticationOperator } from "./IAuthenticationOperator";
import { IPermanentStoreOperator } from "./IPermanentStoreOperator";
export interface IRendererOperatorCollection {
    eventOperator?: IEventOperator;
    componentOperator?: IComponentOperator;
    loadingOperator: ILoadingOperator;
    authenticationOperator?: IAuthenticationOperator;
    permanentStoreOperator?: IPermanentStoreOperator;
}
//# sourceMappingURL=IRendererOperatorCollection.d.ts.map