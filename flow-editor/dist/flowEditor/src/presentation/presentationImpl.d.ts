import { DependencyContainer } from "../domain/core/diContainer";
import { IPresentation } from "../domain/presentation/IPresentation";
export declare class PresentationImpl implements IPresentation {
    private readonly container;
    private root?;
    constructor(container: DependencyContainer);
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
}
//# sourceMappingURL=presentationImpl.d.ts.map