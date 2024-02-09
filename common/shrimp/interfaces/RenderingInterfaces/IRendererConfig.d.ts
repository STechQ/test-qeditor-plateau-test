import { AlertType, ErrorSource, IActionButton } from "../ComponentInterfaces/IAlert";
import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
import { ILRID } from "../ComponentInterfaces/ILocalResource";
import { IConfig } from "../quick/IConfig";
import { IExternalLocalizationFunc } from "../quick/IExternalLocalizationFunc";
import { INavigationManager } from "../quick/INavigationManager";
import { PlatformType } from "../quick/IPlatform";
import { IProcessManager } from "../quick/IProcessManager";
import { IRoleBaseAuthorizationFunc } from "../quick/IRoleBaseAuthorizationFunc";
import { ISiteSettings } from "../quick/ISiteSettings";
/**
 * WebSDK per CreateRenderer
 */
export interface IRendererConfig {
    alert?: (options: {
        title?: string;
        text?: string;
        category?: keyof typeof AlertType;
        actionButtons?: Array<IActionButton>;
        error?: {
            errorMessage?: string;
            errorCode?: string;
            errorSource?: keyof typeof ErrorSource;
        };
    }, parameters?: {
        ownerComponent?: IComponentCollection;
    }) => void;
    LRType?: string;
    GlobalLRDict?: ILRID;
    SiteSettings?: ISiteSettings;
    webPreviewPath?: string;
    performance?: () => number;
    roleBaseAuthorizationFunc?: IRoleBaseAuthorizationFunc;
    externaLocalizationFunc?: IExternalLocalizationFunc;
    processManager?: IProcessManager;
    navigationManager?: INavigationManager;
    platform?: PlatformType;
    configValues?: IConfig[];
}
//# sourceMappingURL=IRendererConfig.d.ts.map