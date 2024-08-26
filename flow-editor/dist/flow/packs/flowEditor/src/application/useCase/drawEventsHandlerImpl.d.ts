import { DependencyContainer } from "../../domain/core/diContainer";
import { IDrawArea } from "../../domain/infrastructure/IDrawArea";
import { IDrawEventsHandler } from "../../domain/useCase/IDrawEventsHandler";
import { IFlow } from "../../domain/useCase/IFlow";
import { IHistory } from "../../domain/useCase/IHistory";
import { ISelection } from "../../domain/useCase/ISelection";
import { IState } from "../../domain/useCase/IState";
import { ISwitchCase } from "../../domain/useCase/ISwitchCase";
export declare class DrawEventsHandlerImpl implements IDrawEventsHandler {
    private readonly flow;
    private readonly selection;
    private readonly drawArea;
    private readonly switchCase;
    private readonly history;
    private readonly state;
    private unhandler?;
    constructor(container: DependencyContainer, flow?: IFlow, selection?: ISelection, drawArea?: IDrawArea, switchCase?: ISwitchCase, history?: IHistory, state?: IState);
    handleEvents(): void;
    unhandleEvents(): void;
}
//# sourceMappingURL=drawEventsHandlerImpl.d.ts.map