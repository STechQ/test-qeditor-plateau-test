export declare enum ErrorSource {
    Page = "Page",
    Network = "Network",
    Validation = "Validation"
}
export declare enum AlertType {
    Warning = "Warning",
    Info = "Info",
    Success = "Success",
    Error = "Error"
}
export declare enum AlertButtonType {
    Confirm = "Confirm",
    Cancel = "Cancel"
}
export interface IActionButton {
    name?: string;
    type: keyof typeof AlertButtonType;
    clickEventName?: string;
}
//# sourceMappingURL=IAlert.d.ts.map