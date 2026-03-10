import { Download } from "../../../../common/shrimp/helpers/download";
import { IDownloadRequest } from "../../../../common/shrimp/interfaces/NetworkInterfaces/IRequest";
export declare class DownloadManager {
    generalDownload: Download;
    RequestHandler(request: IDownloadRequest): void;
    extractFileNameFromHeader(headers: Object): string | null;
    download(data: string, fileName: string): any;
}
//# sourceMappingURL=DownloadManager.d.ts.map