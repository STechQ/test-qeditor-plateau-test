/// <reference types="node" />
import { Stats } from "fs";
export interface ICloudProviderFileSystem {
    getStatAsync(source: string): Promise<Stats>;
    getItemsAsync(path: string): Promise<Array<string>>;
}
export declare const ICloudProviderFileSystem: unique symbol;
//# sourceMappingURL=ICloudProviderFileSystem.d.ts.map