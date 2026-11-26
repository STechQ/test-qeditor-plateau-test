import { DependencyContainer } from "../../domain/core/diContainer";
import { IDrawArea } from "../../domain/infrastructure/IDrawArea";
import { IDrawEventsHandler } from "../../domain/useCase/IDrawEventsHandler";
import { IFlow } from "../../domain/useCase/IFlow";
import { IHistory } from "../../domain/useCase/IHistory";
import { IParallel } from "../../domain/useCase/IParallel";
import { ISelection } from "../../domain/useCase/ISelection";
import { IState } from "../../domain/useCase/IState";
import { ISwitchCase } from "../../domain/useCase/ISwitchCase";
import { IStepRepo } from "../../domain/useCase/IStepRepo";
import { IConnectedStepCreator } from "../../domain/useCase/IConnectedStepCreator";
export declare class DrawEventsHandlerImpl implements IDrawEventsHandler {
    private readonly flow;
    private readonly selection;
    private readonly drawArea;
    private readonly switchCase;
    private readonly history;
    private readonly state;
    private readonly stepRepo;
    private readonly parallel;
    private readonly connectedStepCreator;
    private unhandler?;
    constructor(container: DependencyContainer, flow?: IFlow, selection?: ISelection, drawArea?: IDrawArea, switchCase?: ISwitchCase, history?: IHistory, state?: IState, stepRepo?: IStepRepo, parallel?: IParallel, connectedStepCreator?: IConnectedStepCreator);
    handleEvents(): void;
    unhandleEvents(): void;
}
//# sourceMappingURL=drawEventsHandlerImpl.d.ts.map