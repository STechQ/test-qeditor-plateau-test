import { DependencyContainer } from "../../domain/core/diContainer";
import { IComponentProvider } from "../../domain/useCase/IComponentProvider";
import { IViewModel, ReactComponent } from "../../domain/viewModel/IViewModel";
export declare class ComponentProvider implements IComponentProvider {
    private readonly viewModel;
    constructor(container: DependencyContainer, viewModel?: IViewModel);
    getComponentFor<TProps>(token: symbol, component: ReactComponent<TProps>): ReactComponent<TProps>;
}
//# sourceMappingURL=componentProviderImpl.d.ts.map