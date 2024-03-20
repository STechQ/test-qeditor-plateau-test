import InputMask from "inputmask";
import { ContextManager } from "../../../../../../common/shrimp/context";
import { IComponentCollection } from "../../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IVnode } from "../../../../../../common/shrimp/interfaces/ComponentInterfaces/IVnode";
import { IWebSDKSettingsWrapper } from "../../../../../../common/shrimp/interfaces/quick/IWebSDK";
import { IExtensionData } from "./IExtensionData";
import { QShell } from "../../../../../../common/qshell";
export declare class VTextFieldFormattingExtensionData implements IExtensionData {
    private settingsWrapper;
    private websdkContext;
    private qShell;
    private datadata;
    private ibanStructures;
    constructor(settingsWrapper: IWebSDKSettingsWrapper, websdkContext: ContextManager, qshell: QShell);
    create(compCollection: IComponentCollection, attrs: Record<string, any>): void;
    readonly extensionDictionary: Record<string, (componentCollection: IComponentCollection, attrs: Record<string, any>) => InputMask.Instance>;
    private static createNewInputMask;
    private initialize;
    private setDefaultConfigurations;
    private static maskComplete;
    private static beforePaste;
    static findInputDOM(componentCollection: IComponentCollection): IVnode | undefined;
    private static getComponentHtmlElement;
}
//# sourceMappingURL=VTextFieldFormattingExtensionData.d.ts.map