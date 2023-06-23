import { TypeHelper } from "../../../../../common/shrimp/helpers/typeHelper";
import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    typeHelper: TypeHelper;
    seqErrCount: number;
    connection: WebSocket;
    urlData: any;
    urlParamsData: any;
    messageData: any;
    messageRequestList: Function[];
    timerID: number | undefined;
    reconectTryCount: number;
    reason: string;
    onConnectionReason: {
        connectionError: string;
        connectionClose: string;
        userSend: string;
        autoConnect: string;
    };
}, {
    Send(message?: string | Object | undefined, urlParams?: Object | undefined): void;
    SendMessage(connectionReason?: String | undefined, message?: string | Object | undefined, urlParams?: Object | undefined): void;
    Close(): void;
    _connect(connectionReason?: String | undefined, sendMessage?: (() => void) | undefined, urlParams?: Object | undefined): void;
    _regulateUrl(): void;
    _setUrlParams(): void;
    _calculateReconnectInterval(intervalCounter: number): number;
    _reConnect(reconnectReason?: String | undefined): void;
}, {
    message: any;
    urlParams: any;
}, {
    url: string;
    secure: boolean;
    message: any;
    urlParams: any;
    enableIamAuth: boolean;
    sendQueueMessage: boolean;
    autoConnect: boolean;
    reconnect: boolean;
    reconnectInterval: number;
    reconnectBackOff: boolean;
    _renderingProps: any;
}>;
export default _default;
//# sourceMappingURL=LiveConnection.vue.d.ts.map