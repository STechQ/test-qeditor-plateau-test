import { FileUrlCreationRuleName } from "../../jobs/src/application/shared/fileUrlCreator";
import { IModel, IModule, IWorkflowExportItem } from "../../ui/src/domain/model/models";
import { IOrganization, IOrganizationCloud } from "./membership";
import { IApplication, IDependentModel, IModelBodyObject, IOrganizationActions, UsageType } from "./quickCloud";
export interface IQCloudBaseResponse<T extends Record<string, any> | void> {
    status: "success" | "customerror" | "permissionError" | "error";
    data: T;
    error?: {
        message: string;
        title?: string;
    };
}
export interface IGetExportJobsByGroupIDRequest {
    groupID: IQcloudJob["groupID"];
}
export interface IListExportJobsRequest {
    jobCount: number;
    status?: StatusType;
}
export interface IListExportJobsResponse {
    jobs: Array<IQcloudJob>;
}
export interface IInitJobStepsRequest {
    jobID: IQcloudJob["jobID"];
    groupID: IQcloudJob["groupID"];
    steps: Array<string>;
}
export interface IInitJobStepsResponse {
}
export interface IUpdateJobStepRequest {
    jobID: IQcloudJob["jobID"];
    newStep?: {
        name: IExportJobStepDbItem["name"];
        startTime: IExportJobStepDbItem["startTime"];
    };
    oldStep?: {
        name: IExportJobStepDbItem["name"];
        timeElapsed: IExportJobStepDbItem["timeElapsed"];
        logs: IExportJobStepDbItem["logs"];
        status: IExportJobStepDbItem["status"];
    };
    skippedStepNames?: Array<string>;
    jobStatus?: IExportJobDbItem["status"];
}
export interface IUpdateJobStepResponse {
}
export interface IGetExportModelsRequest {
    type: "named" | "entityDesigner" | "flow" | "container" | /*"flowEntity" //FLOW ENTITY IS GOING BYE BYE (perhaps 🤔) |*/ "other";
    organizationId: string;
    models: Array<{
        id: IExportItem["id"];
        ver: IExportItem["ver"];
    }>;
    modelKey?: "container-runtime" | "files";
}
export interface IModelBodyResponse extends IModelBodyObject {
    id: IExportItem["id"];
    createDate: Date;
    updateDate?: Date;
    dependentModels?: Array<IDependentModel>;
}
export interface IGetExportModelsResponse {
    models: Array<IModelBodyResponse>;
}
export interface IExportItem {
    id: string;
    ver: string;
    type: "settings_yaml" | "alert_qjson" | "pipeline_qjson" | "localProxy_yaml" | "globalLocalization_qjson" | "loading_qjson" | "componentList_js" | "namedComps" | "qjsons" | "css" | "containerServices_js" | "bpmn" | "process" | "entityDesigner" | "flow" | "assetList_js" | /*"flowEntity" //FLOW ENTITY IS GOING BYE BYE (perhaps 🤔) |*/ "lottie" | "appSettings" | "png" | "jpg" | "jpeg" | "svg" | "gif" | "woff" | "woff2" | "ttf" | "otf" | "certificate" | "containerServIntelli_ts" | "theme" | "container";
    size?: number;
    path: string;
    name: string;
    isRootPage?: boolean;
    ownerType?: "application" | "module";
    ownerName?: string;
    modulePrefix?: string;
    entityGenerationDomain?: IOrganizationActions["entityGenerationDomain"];
    createDate?: Date;
    updateDate?: Date;
    dependentModels?: Array<IDependentModel>;
}
export type JobType = "export" | "deploy" | "pack" | "appmanagement" | "organizationManagement" | "workflowExport";
export type JobCauseType = "download" | "publish";
export type ExportType = "qui" | "sdk" | "model";
export type DeployType = "module" | "application";
export type StatusType = "waiting" | "running" | "success" | "failed" | "skipped";
export type AllJobDataTypes = IExportJobData | IServiceExportJobData | IDeployJobData | IBuildJobData | IDeploymentStartJobData | IAppManagementJobData | IOrganizationManagementJobData | IWorkflowExportJobData;
export interface IQcloudJob {
    jobID: string;
    organizationId: IOrganization["id"];
    jobData: AllJobDataTypes;
    type: JobType;
    layer?: number;
    groupID?: string;
    createDate: Date;
    createdBy: string;
}
export interface IJobData {
    items: Array<IExportItem>;
}
export interface IExportJobData extends IJobData {
    type: ExportType;
    app: {
        ID: string;
        name: string;
        version?: string;
        versionId?: string;
    };
    fileUrlCreatorRuleName?: FileUrlCreationRuleName;
    modelFileNameSchema?: string;
}
export interface IWorkflowExportJobData {
    type?: undefined;
    app: {
        ID: string;
        name: string;
    };
    items: Array<IWorkflowExportItem>;
}
export interface IPackJobData extends IExportJobData {
    iamUsage?: boolean;
    platformSelection?: IPlatformSelection;
}
export interface IServiceExportJobData extends IJobData {
    type: DeployType;
    deployObject: {
        ID: string;
        name: string;
    };
}
export interface IDeployJobData extends IJobData {
    type: DeployType;
    deployObject: {
        ID: string;
        name: string;
    };
    environment: IEnvironment;
    dropServiceDb: boolean;
    uiType?: ExportType;
    deploymentResult?: {
        hosts: [string];
    };
    platformSelection?: IPlatformSelection;
}
export interface IPlatformSelection {
    web: boolean;
    mobile: boolean;
}
export interface IBuildJobData {
    app: IExportJobData["app"];
    type: ICreateDeployJobParam["type"];
    package: {
        type: DeployType;
        name: string;
        zip: string;
        mainDir: string;
    };
    buildResult?: IBuildInformation;
}
export interface IDeploymentStartJobData {
    app: IExportJobData["app"];
    type: ICreateDeployJobParam["type"];
    deployConfig?: ICreateDeployJobParam["deployConfig"];
    platformSelection?: IPlatformSelection;
}
export interface IAppManagementJobData {
    appID: string;
    type: "delete" | "deletegcpenv";
    addHistory?: boolean;
    k8Namespace?: string;
}
export interface IOrganizationManagementJobData {
    type: "delete";
    gcpEnvironments: Array<string>;
}
export interface IBuildInformation {
    name: string;
    version: string;
}
export type IEnvironment = IGitlabEnvironment | IAWSLambdaEnvironment | IAzureEnvironment;
export interface IGitlabEnvironment {
    type: "gitlab";
    params: IGitlabEnvironmentParams;
}
export interface IGitlabEnvironmentParams {
    repoId: number;
    productRepoId: number;
    jobName?: string;
    commitServiceId?: number;
}
export interface IAWSLambdaEnvironment {
    type: "awsLambda";
    region: string;
    credentials: {
        accessKeyId: string;
        secretAccessKey: string;
    };
}
export interface IAzureEnvironment {
    type: "azure";
    envID: string;
}
export interface IDeployJobItem {
    deployObjectID: string;
    deployType: DeployType;
    deployItems: Array<IExportItem>;
    environment: IDeployJobData["environment"];
    dropServiceDb: IDeployJobData["dropServiceDb"];
    uiType?: ExportType;
    layer?: number;
    platformSelection?: IDeployJobData["platformSelection"];
}
export interface IFileSystemItem {
    id: string;
    type?: "settings_yaml" | "alert_qjson" | "pipeline_qjson" | "localProxy_yaml" | "globalLocalization_qjson" | "loading_qjson" | "componentList_js" | "namedComps" | "qjsons" | "css" | "containerServices_js" | "jpeg" | "jpg" | "png" | "svg" | "gif" | "lottie" | "woff" | "woff2" | "ttf" | "otf";
    size?: number;
    path: string;
    body: string;
    name: string;
    isRootPage?: boolean;
    modulePrefix?: string;
    ownerType?: "application" | "module";
    usageType?: "appSettings";
    createDate: Date;
    updateDate?: Date;
}
export interface ICreateExportJobParam {
    appID: string;
    exportType: ExportType;
    selectionData: Array<IExportItem>;
    versionID?: string;
    cause?: JobCauseType;
    layer?: number;
    groupID?: string;
    platformSelection?: IPlatformSelection;
}
export interface ICreateDeployJobParam {
    appID: string;
    type: "build" | "deployment" | "deletePlateauEnvironment";
    package?: {
        type: DeployType;
        name: string;
        zip: string;
        mainDir: string;
    };
    deployConfig?: {
        process: {
            enabled: boolean;
            configModelIDs: Array<IProcessConfigModelItem>;
        };
    };
    k8Namespace?: string;
    layer: number;
    groupID: string;
    platformSelection?: IPlatformSelection;
}
export interface IProcessConfigModelItem {
    moduleName: string;
    model: {
        id: string;
        name: string;
        version: string;
    };
}
export interface IExportJobDbItem {
    jobID: IQcloudJob["jobID"];
    organizationId: IOrganization["id"];
    jobData: IQcloudJob["jobData"];
    type: IQcloudJob["type"];
    layer?: IQcloudJob["layer"];
    groupID?: IQcloudJob["groupID"];
    createDate: Date;
    createdBy: string;
    status: StatusType;
    grabbed: boolean;
}
export interface IExportJobStepDbItem {
    ID: string;
    jobID: IQcloudJob["jobID"];
    name: string;
    startTime: Date;
    timeElapsed: number;
    logs: Array<string>;
    groupID?: IQcloudJob["groupID"];
    createDate?: Date;
    status: StatusType;
}
export interface IArtifactMinioDetails {
    objectName: string;
}
export interface IArtifactInfoDBItem {
    ID: IQcloudJob["jobID"] | IQcloudJob["groupID"];
    name: string;
    type: "web";
    source: "minio";
    details: IArtifactMinioDetails;
}
export interface IInitJobHistoryRequest {
    ID: string;
    appID: string;
    isMultiStep: boolean;
    type: "publish" | "download";
    cloudProvider?: keyof IOrganizationCloud;
    platform?: IPlatformSelection;
}
export interface IExportJobHistoryDbItem extends Omit<IInitJobHistoryRequest, "appID"> {
    app: IExportJobData["app"];
    createDate: IExportJobDbItem["createDate"];
    createdBy: IExportJobDbItem["createdBy"];
    status: IExportJobDbItem["status"];
}
export interface IExportJobHistoryRequest {
    applicationID: string;
    type: IInitJobHistoryRequest["type"];
}
export interface IPipelineStatus {
    type: "MB" | "MR";
    status: "SUCCESS" | "FAIL";
    log?: any;
    veriables?: Record<string, any>;
    date: Date;
}
export interface ITableData {
    id: string;
    parent?: ITableData;
    collapsed?: boolean;
    anyChildChecked?: boolean;
    allChildChecked?: boolean;
    checked?: boolean;
    name: string;
    type: IModel["modelType"] | IModule["objectType"] | "folder";
    version?: string;
    disabled?: boolean | true;
    children?: Array<ITableData>;
    usageType?: UsageType;
    imported?: boolean | "fromOuterOrg";
    level?: number;
    ownerName?: string;
    ownerType?: IModule["objectType"] | IApplication['objectType'];
    path?: string;
    overridden?: boolean;
    nextVersionPreview?: string;
    isUnmodifiableTotal?: boolean;
    isCheckedOut?: boolean;
    isModified?: boolean;
}
//# sourceMappingURL=exporter.d.ts.map