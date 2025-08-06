import { ICommonState, IStateBaseType } from "../../../flowInterfaces/runtime/StepRuntime";
export declare class CommonState<T extends IStateBaseType = IStateBaseType> implements ICommonState<T> {
    private values;
    set(key: string, value: T, secret: string): void;
    get(key: string, secret: string): T | undefined;
    destruct(): void;
}
//# sourceMappingURL=commonState.d.ts.map