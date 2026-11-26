import { IRendererConfig } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IRendererConfig";
import { INavigationManager } from "../../../../common/qshell";
import { IUrlOptions } from "../../../../common/shrimp/interfaces/quick/IUrl";
import { ContextManager } from "../../../../common/shrimp/context";
import { INavigationOptions } from "../../../../common/shrimp/interfaces/quick/INavigationManager";
import { IRenderer } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IRenderer";
export declare class NavigationManagerImpl implements INavigationManager {
    contextName: string;
    private websdkContext;
    static renderer?: IRenderer;
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
    setRenderer(renderer: IRenderer): void;
}
//# sourceMappingURL=NavigationManagerImpl.d.ts.map