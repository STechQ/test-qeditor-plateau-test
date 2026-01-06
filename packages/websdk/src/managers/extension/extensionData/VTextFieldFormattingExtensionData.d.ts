import { ContextManager } from "../../../../../../common/shrimp/context";
import { IComponentCollection } from "../../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IVnode } from "../../../../../../common/shrimp/interfaces/ComponentInterfaces/IVnode";
import { IWebSDKSettingsWrapper } from "../../../../../../common/shrimp/interfaces/quick/IWebSDK";
import { IExtensionData } from "./IExtensionData";
export declare class VTextFieldFormattingExtensionData implements IExtensionData {
    private settingsWrapper;
    private websdkContext;
    private datadata;
    private ibanStructures;
    private ibanMaskMap;
    constructor(settingsWrapper: IWebSDKSettingsWrapper, websdkContext: ContextManager);
    create(compCollection: IComponentCollection, attrs: Record<string, any>): void;
    readonly extensionDictionary: Record<string, (componentCollection: IComponentCollection, attrs: Record<string, any>) => void>;
    private createNewInputMask;
    private initialize;
    private setDefaultConfigurations;
    private maskComplete;
    private beforePaste;
    findInputDOM(componentCollection: IComponentCollection): IVnode | undefined;
    private getComponentHtmlElement;
}
//# sourceMappingURL=VTextFieldFormattingExtensionData.d.ts.map