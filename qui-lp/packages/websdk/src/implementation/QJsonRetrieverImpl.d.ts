import { IExternalQJsonRetriever } from "@stechquick/algae/lib/quick/IExternalQJsonRetriever";
import { IQJsonRetriever } from "../../../../common/qshell";
import { QJsonRetrievedType } from "../../../../common/qshell/src/interfaces/construction/IQJsonRetriever";
import { IWebSDKSettingsWrapper } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
import NetworkManagerImpl from "./NetworkManagerImpl";
export default class QJsonRetrieverImpl implements IQJsonRetriever {
    contextName: string;
    private network;
    private settingsWrapper;
    private externalQJsonRetriever?;
    private get qjsonDirectPath();
    private get qjsonUrlPrefix();
    get disablePagePool(): boolean | undefined;
    constructor({ contextName, network, settingsWrapper }: {
        contextName: string;
        network: NetworkManagerImpl;
        settingsWrapper: IWebSDKSettingsWrapper;
    });
    private arrangeQJsonPath;
    SetExternalQJsonRetriever(externalQJsonRetriever: IExternalQJsonRetriever): void;
    private willExternalHandle;
    retrieveModelAsync({ modelPath, options }: {
        modelPath: string;
        options: {
            disableLoading: boolean;
        };
    }): Promise<string | object>;
    retrieveQJsonAsync(qjsonPath: string, options: {
        disableLoading: boolean;
    }): Promise<QJsonRetrievedType>;
}
//# sourceMappingURL=QJsonRetrieverImpl.d.ts.map