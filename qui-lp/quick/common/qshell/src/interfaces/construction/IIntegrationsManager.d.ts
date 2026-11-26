import { IContextItem } from "../../../../shrimp/context";
export declare const IntegrationsManagerContextName: string;
export interface IIntegrationsManager extends IContextItem {
    customIntegrationEventTrigger(name: string, params: any[], quick?: any): Promise<any>;
}
//# sourceMappingURL=IIntegrationsManager.d.ts.map