import { IEnvKeyMap } from "../../everything/workflow/runtimeObjects/IEnvKeyMap.js";
export declare class EnvManager<TEnvKeyMap extends IEnvKeyMap> {
    private readonly envKeyMap;
    private readonly defaults;
    readonly isLocal: boolean;
    static createEnvManager<TEnvKeyMap extends IEnvKeyMap>(defaultValues: TEnvKeyMap, configImport: () => {
        envKeyMap: TEnvKeyMap;
    }): EnvManager<TEnvKeyMap>;
    private constructor();
    getEnvValue<T extends keyof TEnvKeyMap>(key: T): Promise<TEnvKeyMap[T]>;
    getEnvMapKey<T extends keyof TEnvKeyMap>(key: T): string;
    private port?;
    getEnvPort(): Promise<number>;
}
//# sourceMappingURL=envManager.d.ts.map