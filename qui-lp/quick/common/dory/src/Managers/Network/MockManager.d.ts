import { IContextItem } from "../../../../shrimp/context";
import { Dory } from "../../Dory";
export declare class MockObject<MockType> {
    private values;
    private playCounter;
    private mockKey;
    constructor(mockKey: string);
    Reset(): void;
    AddMock(value: MockType, overrideCapture: boolean): void;
    GetMock(overrideCapture: boolean): MockType;
}
export declare enum MockMode {
    off = "off",
    captureOnly = "captureOnly",
    playOnly = "playOnly"
}
interface IMockOptions {
    mockMode: MockMode;
    /**
     * Each capture with same key overrides. False for indexed captures. ex: for same key: xx -> xx[1], xx[2], xx[3], ...
     */
    overrideCapture: boolean;
}
export declare class MockManager<MockType> implements IContextItem {
    static ContextName: string;
    static GetMocker<MockType>(options: IMockOptions, dory: Dory): MockManager<MockType>;
    contextName: string;
    private mocks;
    private options;
    private constructor();
    set MockMode(mockMode: MockMode);
    Reset(): void;
    Execute(key: string, realCall: () => MockType): MockType;
    SetMock(key: string, value: MockType, options?: {
        overrideCapture?: boolean;
        overrideMockMode?: boolean;
    }): void;
}
export {};
//# sourceMappingURL=MockManager.d.ts.map