import { IComponentOperator } from "./IComponentOperator";
import { IEventOperator } from "./IEventOperator";
import { ILoadingOperator } from "./ILoadingOperator";
import { IAuthenticationOperator } from "./IAuthenticationOperator";
import { IIndexedDbOperator } from "./IIndexedDbOperator";
export interface IRendererOperatorCollection {
    eventOperator?: IEventOperator;
    componentOperator?: IComponentOperator;
    loadingOperator: ILoadingOperator;
    authenticationOperator?: IAuthenticationOperator;
    indexedDbOperator?: IIndexedDbOperator;
}
//# sourceMappingURL=IRendererOperatorCollection.d.ts.map