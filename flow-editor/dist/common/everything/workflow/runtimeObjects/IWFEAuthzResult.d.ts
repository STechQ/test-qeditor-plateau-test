import { ErrorCodes } from "../../../runtime/infrastructure/customError";
export type IWFEAuthzResult<TSuccess = void, TFail = void> = IWFEAuthzResultFail<TFail> | IWFEAuthzResultSuccess<TSuccess>;
interface IWFEAuthzResultFail<TFail = void> {
    type: "fail";
    message: string;
    code: typeof ErrorCodes[keyof typeof ErrorCodes];
    data?: TFail;
}
interface IWFEAuthzResultSuccess<TSuccess = void> {
    type: "success";
    data?: TSuccess;
}
export {};
//# sourceMappingURL=IWFEAuthzResult.d.ts.map