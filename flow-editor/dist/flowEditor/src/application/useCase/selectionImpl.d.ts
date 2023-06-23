import { DependencyContainer } from "tsyringe";
import { ISelection } from "../../domain/useCase/ISelection";
import { IState } from "../../domain/useCase/IState";
import { IViewModel } from "../../domain/viewModel/IViewModel";
export declare class SelectionImpl implements ISelection {
    private readonly viewModel;
    private readonly state;
    constructor(container: DependencyContainer, viewModel?: IViewModel, state?: IState);
    stepsSelected(stepIDs: Array<string>): void;
    stepsUnselected(stepIDs: Array<string>): void;
    getSelecteds(): string[];
}
//# sourceMappingURL=selectionImpl.d.ts.map