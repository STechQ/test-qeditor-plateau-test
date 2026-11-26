import { IShowConnectedStepMenuRequest } from "../../../../drawArea/types";
import { IStepOptions } from "../../../../flowInterfaces/editor/IStepOptions";
import { DependencyContainer } from "../../domain/core/diContainer";
import { IConnectedStepCreator } from "../../domain/useCase/IConnectedStepCreator";
import { IFlow } from "../../domain/useCase/IFlow";
import { IParallel } from "../../domain/useCase/IParallel";
export declare class ConnectedStepCreatorImpl implements IConnectedStepCreator {
    private readonly flow;
    private readonly parallel;
    private readonly defaultStrategy;
    private readonly strategies;
    constructor(container: DependencyContainer, flow?: IFlow, parallel?: IParallel);
    create(step: IStepOptions, request: IShowConnectedStepMenuRequest): void;
}
//# sourceMappingURL=connectedStepCreatorImpl.d.ts.map