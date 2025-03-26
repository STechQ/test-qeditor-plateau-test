import { ICustomIntegrationItem } from "@stechquick/algae/lib/quick/IntegrationSettings";
import { IContextItem } from "../../context";
export declare const IntegrationsManagerContextName: string;
export interface IIntegrationsManager extends IContextItem {
    customIntegrationEventTrigger(name: string, params: any[]): void;
    LPCustomIntegrations(customIntegrations: ICustomIntegrationItem[]): void;
}
//# sourceMappingURL=IIntegrationsManager.d.ts.map