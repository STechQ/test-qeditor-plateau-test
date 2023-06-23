import { DependencyContainer } from "tsyringe";
export declare function delayTillResolve(container: DependencyContainer, dependencies: Array<symbol>, cb?: () => void | Promise<void>): Promise<void>;
export declare function factoryWrapper<T>(impl: new (c: DependencyContainer) => T): {
    useFactory: (c: DependencyContainer) => T;
};
export declare function createChildContainer(): DependencyContainer;
export { DependencyContainer };
//# sourceMappingURL=diContainer.d.ts.map