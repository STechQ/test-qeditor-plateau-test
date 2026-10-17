import { DependencyContainer } from "tsyringe";
import { IStepPair } from "../../../../drawArea/types";
import { IPoint } from "../../../../flowInterfaces/editor/shape/IPoint";
import { IDrawArea } from "../../domain/infrastructure/IDrawArea";
import { IFlow } from "../../domain/useCase/IFlow";
import { IHistory } from "../../domain/useCase/IHistory";
import { IParallel } from "../../domain/useCase/IParallel";
import { IStepRepo } from "../../domain/useCase/IStepRepo";
import { IViewModel } from "../../domain/viewModel/IViewModel";
export declare class ParallelImpl implements IParallel {
    private readonly viewModel;
    private readonly drawArea;
    private readonly stepRepo;
    private readonly flow;
    private readonly history;
    constructor(container: DependencyContainer, viewModel?: IViewModel, drawArea?: IDrawArea, stepRepo?: IStepRepo, flow?: IFlow, history?: IHistory);
    addParallelBlock(point: IPoint, version: string): void;
    createMissingPair(stepID: string): void;
    findPairStepId(stepID: string): string | undefined;
    getAllPairs(): Array<IStepPair>;
    isOrphan(stepID: string): boolean;
    remapPastedBlocks(idMap: Record<string, string>): void;
    private newBlockId;
    private addBlockStep;
}
//# sourceMappingURL=parallelImpl.d.ts.map