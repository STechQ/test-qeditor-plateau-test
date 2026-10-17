import { DependencyContainer } from "tsyringe";
import { IValidation, IValidationIssue } from "../../domain/useCase/IValidation";
import { IViewModel } from "../../domain/viewModel/IViewModel";
export declare class ValidationImpl implements IValidation {
    private readonly viewModel;
    constructor(container: DependencyContainer, viewModel?: IViewModel);
    validate(): Array<IValidationIssue>;
    private checkBlockPairs;
    /**
     * V4 — an output port carries one connection: a second edge would make the engine spawn a
     * thread per edge, an implicit fork nothing ever joins. `parallelSplit` is exempt on every
     * port: inside a split block extra edges on a case are just extra parallel branches, and
     * the join accounts for them like any other branch.
     * Workflow only: flows and functions keep their fan-out (one thread per edge), there is no
     * Split/Join there to replace it.
     */
    private checkImplicitForks;
    private checkBlockShape;
    private checkStepProps;
    private outgoingConnections;
    private incomingConnections;
    private name;
}
//# sourceMappingURL=validationImpl.d.ts.map