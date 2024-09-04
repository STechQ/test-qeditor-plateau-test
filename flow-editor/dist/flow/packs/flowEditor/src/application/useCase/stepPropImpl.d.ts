import { IExpressionData } from "@stechquick/flow-interfaces/runtime";
import { PropValue } from "../../../../flowInterfaces/runtime/IStepModel";
import { DependencyContainer } from "../../domain/core/diContainer";
import { IDrawArea } from "../../domain/infrastructure/IDrawArea";
import { IHistory } from "../../domain/useCase/IHistory";
import { IStepProp } from "../../domain/useCase/IStepProp";
import { IViewModel } from "../../domain/viewModel/IViewModel";
export declare class StepPropImpl implements IStepProp {
    private readonly viewModel;
    private readonly drawArea;
    private readonly history;
    constructor(container: DependencyContainer, viewModel?: IViewModel, drawArea?: IDrawArea, history?: IHistory);
    setStepProp(stepIDs: Array<string>, propName: string, propValue: PropValue): void;
    setStepOutputs(stepID: string, outputs: Array<string>): void;
    setSwimlaneName(swimlaneId: string, name: IExpressionData): void;
}
//# sourceMappingURL=stepPropImpl.d.ts.map