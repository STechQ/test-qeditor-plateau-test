import { ScriptLang } from "../interfaces/Scripting/scriptLang";
import { ICompJson } from "../interfaces/ComponentInterfaces/ICompJson";
export interface ICompLocation {
    compJson: ICompJson;
    curPath: Array<string | number>;
}
export interface ICompParentLocation {
    selfIndex: number | undefined;
    parentArray: Array<ICompJson | null>;
    parent: ICompJson | null;
}
export declare enum CompSearchKey {
    PID = 0,
    EditorID = 1,
    Render = 2
}
export declare class QJsonHelper {
    /**
     * Make the calculation with given pageJson
     * @param pageJson Given pageJson
     * @param callBack Function to be handled. Return false to STOP traversing.
     * @returns boolean
     */
    static ForEachComp(pageJson: Array<ICompJson>, callBack: (compJson: ICompJson, path: Array<string | number>, info?: {
        compName: string;
        eID: string;
        parentCompJson?: ICompJson;
        compiledJson?: ICompJson;
    }) => boolean, compiledJson?: Array<ICompJson>): void;
    static findComponentByType(curJson: Array<ICompJson>, type: "RenderingComponent"): ICompJson | undefined;
    /**
     * @deprecated Please use QJsonHelper.FindParentArrayPath
     */
    findParentArrayPath(path: (string | number)[], pageJson: Array<ICompJson>): ICompParentLocation;
    /**
     * Find json and path with given path in the given pageJson
     * @param path Sample path: [3,default,2]
     * @param pageJson Given pageJson
     * @returns ICompParentLocation
     */
    static FindParentArrayPath(path: (string | number)[], pageJson: Array<ICompJson>): ICompParentLocation;
    /**
     * @deprecated please use QJsonHelper.FindCompBySearchField
     */
    findCompBySearchField(pageJson: Array<ICompJson>, value: string, componentPropertySearchKey?: CompSearchKey): ICompLocation | null;
    /**
     * Search the given pageJson with key and value parameters
     * @param pageJson Given pageJson
     * @param value To be searched value
     * @param componentPropertySearchKey Search key
     * @returns ICompLocation or null
     */
    static FindCompBySearchField(pageJson: Array<ICompJson>, value: string, componentPropertySearchKey?: CompSearchKey): ICompLocation | null;
    /**
     * Parse event parameters
     * @param eventParameters event parameters QS: x, y, z | TS: x: string, y: {a:number}, z: number
     */
    static ParseParameters(eventParameters?: string, handlerLang?: ScriptLang): Array<{
        name: string;
        type?: string;
    }> | undefined;
    /**
     * Find component json path by EID
     * @returns path Sample path: [3,default,2]
     */
    static FindCompPathByEID(qjson: Array<ICompJson>, compEID: string): (string | number)[] | undefined;
}
//# sourceMappingURL=QJsonHelper.d.ts.map