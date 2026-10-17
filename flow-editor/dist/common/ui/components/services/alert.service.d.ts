export type AlertType = 'success' | 'error' | 'info' | 'warning';
export type AlertPayload = {
    message: string;
    type: AlertType;
};
type Listener = (payload: AlertPayload) => void;
declare class AlertService {
    private listeners;
    private root;
    on(listener: Listener): void;
    off(listener: Listener): void;
    private emit;
    private initialize;
    show(message: string, type?: AlertType): void;
}
export declare const alertService: AlertService;
export {};
//# sourceMappingURL=alert.service.d.ts.map