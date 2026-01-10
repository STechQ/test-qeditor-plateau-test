import { IEnvKeyMap } from "../../everything/workflow/runtimeObjects/IEnvKeyMap.js";
export declare class EnvManager<TEnvKeyMap extends IEnvKeyMap> {
    private readonly envKeyMap;
    private readonly defaults;
    readonly isLocal: boolean;
    private port?;
    private constructor();
    static createEnvManager<TEnvKeyMap extends IEnvKeyMap>(defaultValues: TEnvKeyMap, configImport: () => {
        envKeyMap: Record<keyof TEnvKeyMap, string>;
    }): EnvManager<TEnvKeyMap>;
    tryGetEnvValue<T extends keyof TEnvKeyMap, TDefault>(key: T, defaultValue: TDefault): TEnvKeyMap[T] | TDefault;
    getEnvValue<T extends keyof TEnvKeyMap>(key: T): TEnvKeyMap[T];
    getEnvMapKey<T extends keyof TEnvKeyMap>(key: T): string;
    getEnvPort(): number;
}
//# sourceMappingURL=envManager.d.ts.map