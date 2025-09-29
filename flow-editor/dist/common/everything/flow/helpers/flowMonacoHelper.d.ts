import * as monaco from "monaco-editor";
export declare const dataTypeIdNameDict: Map<string, string>;
export declare class FlowMonacoHelper {
    static getHoverProvider(monaco: typeof import("monaco-editor"), getModelName: (name: string, modelType: string) => Promise<string>): monaco.IDisposable;
    static registerHoverAndClick(monaco: typeof import("monaco-editor"), editor: monaco.editor.IStandaloneCodeEditor, openModel: (modelID: string) => void): void;
    static registerInterfaceLinks(monaco: typeof import("monaco-editor"), editor: monaco.editor.IStandaloneCodeEditor, openModel: (modelID: string) => void): void;
    static setupTypeScriptDefaults(monaco: typeof import("monaco-editor"), intelliInterfaces: string): void;
}
//# sourceMappingURL=flowMonacoHelper.d.ts.map