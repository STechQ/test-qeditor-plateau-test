import { IRendererConfig } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IRendererConfig";
import { INavigationManager } from "../../../../common/qshell";
import { IUrlOptions } from "../../../../common/shrimp/interfaces/quick/IUrl";
import { ContextManager } from "../../../../common/shrimp/context";
import { INavigationOptions } from "../../../../common/shrimp/interfaces/quick/INavigationManager";
export declare class NavigationManagerImpl implements INavigationManager {
    contextName: string;
    private websdkContext;
    go: (undefined | (({ url }: {
        url: any;
    }) => any));
    constructor({ contextName, config, websdkContext }: {
        contextName: string;
        config?: IRendererConfig;
        websdkContext: ContextManager;
    });
    go2(qjsonPath: string, options?: INavigationOptions, cb?: () => void): void;
    createFunctions(config: IRendererConfig): void;
    getUrl(options: any): string;
    backOverride(): void;
    redirectFunc({ url }: {
        url: string;
    }): void;
    redirect({ url, options }: {
        url: string;
        options?: IUrlOptions;
    }): void;
}
//# sourceMappingURL=NavigationManagerImpl.d.ts.map