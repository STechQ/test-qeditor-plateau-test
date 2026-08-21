import { IDoryRenderer } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IHistoryItem } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IHistoryItem";
type ArrangeAppLayoutArgs = {
    vapp: HTMLElement;
    renderer?: IDoryRenderer;
    historyItem: IHistoryItem | undefined;
};
export declare class AppLayoutManager {
    static ArrangeAppLayout({ vapp, renderer, historyItem }: ArrangeAppLayoutArgs): void;
}
export {};
//# sourceMappingURL=AppLayoutManager.d.ts.map