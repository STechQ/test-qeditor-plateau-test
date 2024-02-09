import { IComponentOperator } from "./IComponentOperator";
import { IEventOperator } from "./IEventOperator";
import { ILoadingOperator } from "./ILoadingOperator";
import { IAuthenticationOperator } from "./IAuthenticationOperator";
export interface IRendererOperatorCollection {
    eventOperator?: IEventOperator;
    componentOperator?: IComponentOperator;
    loadingOperator: ILoadingOperator;
    authenticationOperator?: IAuthenticationOperator;
}
//# sourceMappingURL=IRendererOperatorCollection.d.ts.map