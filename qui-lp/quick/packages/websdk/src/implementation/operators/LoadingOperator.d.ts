import { ILoadingOperator } from "../../../../../common/shrimp/interfaces/RenderingInterfaces/Operators/ILoadingOperator";
import { StoreManager } from "../StoreManager";
export declare class LoadingOperator implements ILoadingOperator {
    private readonly storeManager;
    constructor(storeManager: StoreManager);
    showLoading(visible: boolean): void;
}
//# sourceMappingURL=LoadingOperator.d.ts.map