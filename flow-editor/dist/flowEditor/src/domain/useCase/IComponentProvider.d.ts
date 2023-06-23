import { ReactComponent } from "../viewModel/IViewModel";
export interface IComponentProvider {
    getComponentFor<TProps>(token: symbol, component: ReactComponent<TProps>): ReactComponent<TProps>;
}
export declare const IComponentProvider: unique symbol;
//# sourceMappingURL=IComponentProvider.d.ts.map