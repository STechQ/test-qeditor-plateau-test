import { IWebSDKSettingsWrapper } from "../../../../../../common/shrimp/interfaces/quick/IWebSDK";
import { AxiosRequestConfig } from 'axios';
import { StoreManager } from "../../../implementation/StoreManager";
export declare const headerTransportKey = "{99bf6fd6-4fe4-4bb7-a6fc-68b00e2ba71a}";
declare const RequestHandler: (request: AxiosRequestConfig, settingsWrapper: IWebSDKSettingsWrapper, storeManager: StoreManager) => Promise<AxiosRequestConfig>;
export default RequestHandler;
//# sourceMappingURL=RequestHandler.d.ts.map