import { DependencyContainer } from "tsyringe";
import { IDrawArea } from "../../domain/infrastructure/IDrawArea";
import { IPoint } from "../../../../flowInterfaces/editor/shape/IPoint";
import { IFlow } from "../../domain/useCase/IFlow";
import { ISelection } from "../../domain/useCase/ISelection";
import { IStepInstance, IViewModel } from "../../domain/viewModel/IViewModel";
import { IStepOptions } from "../../../../flowInterfaces/editor/IStepOptions";
import { IStepRepo } from "../../domain/useCase/IStepRepo";
import { IHistory } from "../../domain/useCase/IHistory";
export declare class FlowImpl implements IFlow {
    private readonly viewModel;
    private readonly drawArea;
    private readonly selection;
    private readonly stepRepo;
    private readonly history;
    constructor(container: DependencyContainer, viewModel?: IViewModel, drawArea?: IDrawArea, selection?: ISelection, stepRepo?: IStepRepo, history?: IHistory);
    addStep(stepName: string, point: IPoint, version: string): void;
    stepAdded(stepID: string, stepName: string, stepOptions: IStepOptions, props?: IStepInstance["propValues"], swimlaneId?: string): void;
    stepDeleted(stepIDs: Array<string>): string[];
    connectionAdded(connID: string, from: {
        step: string;
        output: string;
    }, to: {
        step: string;
        input: string;
    }): void;
    connectionDeleted(connIDs: Array<string>): string[];
}
//# sourceMappingURL=flowImpl.d.ts.map