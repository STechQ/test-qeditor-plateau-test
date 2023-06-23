import { IWebSDKSettingsWrapper } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
import { IQJsonRetriever } from "../../../../common/qshell";
import NetworkManagerImpl from "./NetworkManagerImpl";
import { IExternalQJsonRetriever } from "../../../../common/shrimp/interfaces/quick/IExternalQJsonRetriever";
import { QJsonRetrievedType } from "../../../../common/qshell/src/interfaces/construction/IQJsonRetriever";
export default class QJsonRetrieverImpl implements IQJsonRetriever {
    contextName: string;
    private network;
    private settingsWrapper;
    private externalQJsonRetriever?;
    private get qjsonDirectPath();
    private get qjsonUrlPrefix();
    constructor({ contextName, network, settingsWrapper }: {
        contextName: string;
        network: NetworkManagerImpl;
        settingsWrapper: IWebSDKSettingsWrapper;
    });
    private arrangeQJsonPath;
    SetExternalQJsonRetriever(externalQJsonRetriever: IExternalQJsonRetriever): void;
    private willExternalHandle;
    retrieveQJsonAsync(qjsonPath: string, options: {
        disableLoading: boolean;
    }): Promise<QJsonRetrievedType>;
}
//# sourceMappingURL=QJsonRetrieverImpl.d.ts.map