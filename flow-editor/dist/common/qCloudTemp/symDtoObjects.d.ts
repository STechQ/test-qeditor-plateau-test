/// <reference types="node" />
import { IApplication, IFolder, IModel, IWorkflowExportItem } from "../../ui/src/domain/model/models";
import { IUserMainInfo, IUser_SUSI } from "./authentication";
import { IFeedbackAttachment, IUserFeedback } from "./feedback";
import { IEditorTypes, IOrganization, IOrganizationCalculatedInfo, IOrganizationFeatures } from "./membership";
import { IApplicationDetails, IApplicationExportSettings, IModelBodyObject, IDependentModel, IOrganizationActions, ModelAdditionals, ObjectID, IModuleBackend, IModuleVersion, ITags, IOrganizationGroup, IModelInfo, ExtensionType, UsageType, AppSettingsModelKeys, AllModelAdditionalTypes, IApplication as IApplicationDbModel, IModelHistoryInfo, IModelCheckout } from "./quickCloud";
import { IApplicationVersion, IApplicationVersionArtifacts } from "./applicationVersion";
import { IUserPreferences } from "./userPreference";
import { IMainStatisticInfo } from "../qCloudTemp/backoffice";
import { IRole } from "./authorization";
import { IExportJobDbItem, IExportJobStepDbItem } from "./exporter";
import { IUserRequest } from "./userRequest";
import { FileSystemModel } from "./modelDatas";
import { ITemplateInfo } from "./template";
import { IInvitationBase } from "./invitation";
import { IAnnouncementDataObj, IAnnouncementServiceObj } from "./announcement";
import { ICodeAssistantResponse } from "@stechquick/algae/lib/qCloudTemp/AIService/codeAssistant";
import { UUID } from "crypto";
import { IExternalToken } from "./externalToken";
import { IAppCloud } from "./application";
import { AzureBlobContentType } from "./azureTypes";
import { ModelType } from "../everything/studio/ui/IStudioUIModelBase";
import { ITagDefinition, ITagValue, TagType } from "./tags";
import { IAllOrgGroupApplicationData } from "./organizationGroupApplication";
import { IModelOrigInfo } from "./applicationCopy";
export type VersionIncType = 'Minor' | 'Major' | 'Fix';
export interface IPageable {
    skip: number;
    limit: number;
}
export type ISignInOrganization = {
    name: IOrganization["name"];
    id: IOrganization["id"];
    status?: IOrganization['status'];
    creatorUserId?: IOrganization["creatorUserId"];
    ownerUserIds?: IOrganization["ownerUserIds"];
    organizationGroupId?: IOrganization["organizationGroupId"];
    accountType?: IOrganization["accountType"];
};
export interface ISignInResponse {
    id: IUser_SUSI["id"];
    email: IUser_SUSI["email"];
    name?: string;
    lastName?: string;
    organizations: Array<ISignInOrganization>;
    organizationGroups?: Array<{
        name: IOrganizationGroup["name"];
        ID: IOrganizationGroup["ID"];
        owners: IOrganizationGroup["owners"];
    }>;
    invitations: IListUserInvitationsResponse["invitations"];
    invitationOrganizations: IListUserInvitationsResponse["organizations"];
    userRoles?: Array<IRole>;
    standAloneInfo?: IUser_SUSI["standAloneInfo"];
}
export interface IListUserOrganizationsResponse {
    name: IOrganization["name"];
    id: IOrganization["id"];
}
export interface IGetOrganizationResponse extends IOrganization {
}
export interface ICreateOrganizationResponse {
    newOrg: IOrganization;
}
export interface IInvitationRequestItem extends IInvitationBase {
}
export interface IInvitationRequest {
    invitations: Array<IInvitationRequestItem>;
}
export interface IDeleteInvitationRequest {
    invitationId: string;
}
export interface IRemoveUserFromOrganizationRequest {
    userId: string;
}
export interface IUpdateOrganizationOwnerRequest {
    userId: string;
    action: "add" | "remove";
}
export interface IBoRemoveUserFromOrganizationRequest {
    userId: string;
    organizationId: string;
}
export interface IListInvitationsResponseItem {
    id: string;
    email: string;
    userId?: string;
    organizationId: IOrganization["id"];
    expireDate: string;
    createDate: string;
    inviter: IUser_SUSI;
}
export interface IListInvitationsResponse {
    invitations: Array<IListInvitationsResponseItem>;
}
export interface IListUserInvitationsResponse {
    invitations: Array<IListInvitationsResponseItem>;
    organizations: Array<{
        id: IOrganization["id"];
        name: IOrganization["name"];
    }>;
}
export interface IGetOrganizationUsersRequest {
    pagination?: IPageable;
}
export interface IBoListOrganizationUsersRequest {
    organizationId: string;
}
export interface IGetOrganizationUsersResponse {
    users: Array<IUser_SUSI>;
}
export interface IBoListOrganizationUsersResponse {
    users: Array<IUser_SUSI>;
    organizations: Array<IOrganization>;
    organizationGroups: Array<IOrganizationGroup>;
}
export interface IUpdateInvitationRequest {
    invitationId: string;
    accept: boolean;
}
export interface IUpdateJoinOrgGroupRequest {
    requestId: string;
    accept: boolean;
    organizationGroupID: string;
}
export interface IGetOrganizationGroupReqRequest {
    type: "joinOrganizationGroup";
    organizationGroupID: string;
}
export interface IGetOrganizationGroupReqResponse {
    id: string;
    organizationName: string | undefined;
    description: string;
    requestingUserEmail: string;
    requestDate: Date;
}
export interface IGetProfileResponse {
    user: IUser_SUSI;
}
export interface IUpdateProfileRequest {
    name: string;
    lastName: string;
    role: string;
}
export interface IUpdateUserInfoRequest {
    userId: string;
    createOrgLimit: number;
}
export interface IUpdateProfileResponse {
    user: IUser_SUSI;
}
export interface IUpdateUserInfoResponse {
    user: IUser_SUSI;
}
export interface IGetPreferencesResponse {
    preferences?: IUserPreferences;
}
export interface IAddOrUpdatePreferencesRequest {
    emailConsent?: boolean;
}
export interface IAddOrUpdatePreferencesResponse {
    preferences: IUserPreferences;
}
export interface IAddFeedbackRequest {
    type: string;
    description: string;
    attachments?: Array<IFeedbackAttachment>;
}
export interface IAddFeedbackResponse {
    feedback: IUserFeedback;
    toEmails: Array<string>;
}
export interface IAddApplicationResponse {
    application: IApplication & {
        details: IApplicationDetails;
    };
    organization: IOrganization;
}
export interface IUpdateApplicationRequestLogo {
    fullName: string;
    dataBase64: string;
    contentType: AzureBlobContentType;
}
export interface IUpdateApplicationRequest {
    ID?: string;
    name?: string;
    description?: string;
    logo?: IUpdateApplicationRequestLogo;
    color?: string;
    ownerUser?: string;
    cloud?: IAppCloud;
    exportSettings?: IApplicationExportSettings;
    updateReason?: "userUpdate" | "appPublish" | "backofficeUpdate" | "appVerCreated";
    mobileUsage?: IUpdateMobileUsage;
    lastReleasedVersion?: string;
    copyApp?: ICopyApp;
}
export interface ICopyApp {
    missingModules?: IMissingModule[];
    orginalPath?: Record<string, {
        path: string;
        name: string;
    }>;
}
export interface IMissingModule {
    name: string;
    currentVersion: string;
    lastReleasedVersion: string;
}
export interface IUpdateModelRequest {
    ID: string;
    name?: string;
    ownerUser?: string;
    modelAdditionals?: ModelAdditionals;
    ownerItemId?: IModelInfo["ownerItem"];
    ownerTypeId?: IModelInfo["ownerType"];
    key?: IModelInfo["key"];
    model?: Array<IModelBodyObject>;
    appID?: string;
    checkin?: boolean;
    publish?: boolean;
    release?: boolean;
    shortComment?: string;
    comment?: string;
    isUnmodifiable?: boolean;
    path?: string;
    convertToBlock?: boolean;
    undoCheckOut?: boolean;
    modelType?: ModelType;
    overriddenModel?: {
        ID: string;
        version?: string;
    };
}
export interface IUpdateModelResponse {
    ID: string;
    modifiedCount?: number;
    dependentModels?: Array<IDependentModel>;
    modifiedModel?: Partial<IModelInfo>;
}
export interface IGetModelResponse {
    ID: IModel["ID"];
    name: IModel["name"];
    checkouts?: Array<{
        user: IUserMainInfo;
        date: string;
    }>;
    modelType: IModel["modelType"];
    modelAdditionals: IModel["additionals"];
    model?: Array<IModelBodyObject>;
    path: string;
    size?: number;
    version?: string;
    isUnmodifiable?: boolean;
}
export interface IGetMainStatisticInfoResponse {
    mainStatistics: IMainStatisticInfo;
}
export interface IGetUserInfoResponse {
    userInfo: IUser_SUSI;
}
export interface IGetOrganizationInfoResponse {
    organizationInfo: IOrganization;
}
export interface IGetChatBotResponse {
    responseText: string;
    verifiedUrls: Array<string>;
    followUpQuestions: Array<string>;
}
export interface IGetCodeAssistantResponse {
    response: ICodeAssistantResponse["refactorResponse"] | ICodeAssistantResponse["explainResponse"] | ICodeAssistantResponse["responseError"];
}
export interface IGetCreateUIResponse {
    jobId: string;
}
export interface IGetCreateUIJobResponse {
    qjson?: string;
    error?: {
        errorMsg: string;
    };
}
export interface IGetAIJobResponse {
    requestedJob: string;
    status: 'InProgress' | 'Completed' | 'Failed';
    response?: IGetCreateUIJobResponse;
    error?: string;
}
export interface IListUsersResponse {
    users: Array<IUser_SUSI>;
    organizations?: Array<IOrganization>;
    organizationGroups?: Array<IOrganizationGroup>;
}
export interface IListOrganizationsResponse {
    organizations: Array<IOrganization>;
    organizationGroups?: Array<IOrganizationGroup>;
    users?: Array<IUser_SUSI>;
    tags?: Array<ITags>;
}
export interface IListOrganizationGroupsResponse {
    organizationGroups: Array<IOrganizationGroup>;
}
export interface IListApplicationsResponse {
    applications: Array<IApplication>;
}
export interface IListModelInfoResponse {
    modelInfos: Array<IModelInfo>;
}
export interface IListModelInfoRequest {
    organizationId: string;
}
export interface IListApplicationsRequest {
    organizationId: string;
}
export interface IBoListApplicationsRequest {
    organizationId: string;
}
export interface IBoListApplicationsResponse {
    applications: Array<IApplication>;
    modelInfos: Array<IModelInfo>;
    modules: Array<IModuleBackend>;
    moduleVersions: Array<IModuleVersion>;
}
export interface IBoUpdateOrganizationRequest {
    organizationId: string;
    accountType?: "premium" | "beta";
    createAppLimit: number;
    actions: IOrganizationActions;
    applications: IEditorTypes;
    environmentPrefix: string;
    features: IOrganizationFeatures;
    tags: Array<ITags['ID']>;
    organizationGroupId: string;
}
export interface IBoUpdateOrganizationResponse {
    organizationRes: IOrganization;
}
export interface IBoGetAzureCredentialsRequest {
}
export interface IBoGetAzureCredentialsResponse {
    subscriptionId: string;
}
export interface IAddDeleteOrganizationJobRequest {
    organizationId: string;
}
export interface IAddDeleteOrganizationJobResponse {
    job: IExportJobDbItem;
}
export interface IAddTagRequest {
    name: string;
    description?: string;
}
export interface IUpdateTagRequest {
    ID: string;
    tag: {
        name?: string;
        description?: string;
    };
}
export interface IBoRemoveTagFromOrganizationRequest {
    organizationId: string;
    tagId: string;
}
export interface IRelaseModuleRequest {
    moduleID: ObjectID;
    moduleVersionIncType: 'Minor' | 'Major' | 'Fix';
    models: Array<{
        modelID: string;
        version: string;
    }>;
    basedVersion?: string;
}
export interface IAppendOuterOrg {
    outerOrgId?: string;
}
export interface IAttachModuleToAppRequest extends IAppendOuterOrg {
    applicationID: string;
    moduleID: ObjectID;
    outerOrgId?: NonNullable<IAppendOuterOrg["outerOrgId"]>;
    version?: string;
}
export interface ICheckExistenceOfModuleVersionResponse {
    majorExist: boolean;
    minorExist: boolean;
    fixExist: boolean;
}
export interface IAddUserStandAloneInfoRequest {
    orgGroup: string;
    appName: string;
    shellInfo: string;
    reason: string;
    lastOpenedDate?: Date;
}
export interface IAddUserPremiumAccountRequestRequest {
    orgDevCount: string;
    phoneNumber: string;
    companyName: string;
}
export interface IAddUserPremiumAccountRequestResponse {
    request: IUserRequest;
}
export interface IListUserRequestsResponse {
    requests: Array<IUserRequest>;
    organizations: Array<IOrganization>;
    users: Array<IUser_SUSI>;
}
export interface IAddServiceDesignerLogRequest {
    username: string;
    logs: [
        {
            time: Date;
        }
    ];
}
export interface IAddOrganizationGroupRequest {
    name: string;
    description?: string;
    features?: IOrganizationFeatures;
    applications?: IEditorTypes;
    createMainOrg: boolean;
}
export interface IAddOrganizationGroupResponse {
    organizationGroup: IOrganizationGroup;
}
export interface IAddOrganizationToGroupRequest {
    organizationId: string;
    organizationGroupId: string;
}
export interface IAddOrganizationToGroupResponse {
    organization: IOrganization;
    organizationGroup: IOrganizationGroup;
}
export interface IDeleteOrganizationFromGroupRequest {
    organizationId: string;
}
export interface IDeleteOrganizationFromGroupResponse {
    organization: IOrganization;
}
export interface IGetOrganizaionGroupDetailsRequest {
    organizationGroupId: string;
}
export interface IGetOrganizaionGroupDetailsResponse {
    organizationGroup: IOrganizationGroup;
    organizations: Array<IOrganization>;
    allOrganizations: Array<IOrganization>;
    users: Array<IUser_SUSI>;
    organizationApplications: Array<IOrganizationGroupDetailsOrganizationApplications>;
    allOrganizationGroups: Array<IOrganizationGroup>;
    owners: Array<IUser_SUSI>;
}
export interface IGetOrganizaionGroupDetailsByUserTypeResponse {
    organizationGroup: IOrganizationGroup;
    organizations: Array<IOrganization>;
    users?: Array<IUser_SUSI>;
    organizationApplications?: Array<IOrganizationGroupDetailsOrganizationApplications>;
    tagDefinitions?: Array<ITagDefinition>;
}
export interface IOrganizationGroupExtended extends ISignInOrganization {
    licensed?: 'LICENSED' | 'Demo Org' | 'Free';
    organizationGroupName?: string;
    createdBy?: string;
}
export interface IOrganizationGroupDetailsOrganizationApplications extends IBoListApplicationsResponse {
    organizationId: string;
}
export interface IUpdateOrganizaionGroupRequest {
    ID: string;
    organizationGroup: {
        name?: string;
        description?: string;
        features?: IOrganizationFeatures;
        applications?: IEditorTypes;
    };
}
export interface IUpdateOrganizaionGroupOwnersRequest {
    ID: string;
    action: 'add' | 'remove';
    invitations?: Array<IInvitationRequestItem>;
    removeOwnerId?: string;
}
export interface IGetFileSystemModelsResponse {
    models: Array<FileSystemModel>;
}
export interface IXlsxExportRequest {
    rows: Array<any>;
    columns: Array<{
        header: string;
        key: string;
        width?: number;
    }>;
    options: {
        sheetName?: string;
        freezeFirstRow?: boolean;
        setFilterToFirstRow?: boolean;
    };
}
export interface IGetAIResponsiveSuggestionsRequest {
    layoutModel: object;
}
export interface IGetAIResponsiveSuggestionsResponse {
    suggestions: object;
}
export interface IUpdateMobileUsage {
    isMobileTemplateUsed?: boolean;
    isMobilePublished?: boolean;
}
export interface IListChildItemsResponse {
    items: Array<IModelInfo>;
}
export interface IAddModelFromTemplateRequest {
    modelInfoID: ITemplateInfo["ID"];
    modelType: ModelType;
    name: string;
    ownerItem: ObjectID;
    ownerType: IModelInfo["ownerType"];
    path: string;
    modelAdditionals: ModelAdditionals;
    version?: string;
}
export interface IAddModelFromTemplateResponse {
    createdModel: IModelInfo;
}
export interface IAddModelRequest {
    ID?: string;
    name: string;
    ownerItem: ObjectID;
    ownerType: IModelInfo["ownerType"];
    model: Array<IModelBodyObject>;
    modelAdditionals: AllModelAdditionalTypes;
    modelType: ModelType;
    modelID?: string;
    extension?: ExtensionType;
    usageType?: UsageType;
    key?: AppSettingsModelKeys;
    migrated?: boolean;
    origInfo?: IModelOrigInfo;
    path: string;
    appID?: ObjectID;
    checkouts?: Array<IModelCheckout>;
    version?: string;
    overriddenModel?: IModelInfo['overriddenModel'];
    dependentModels?: IDependentModel[];
}
interface IAddModelResponseNewModel extends IModelInfo {
    path: NonNullable<IModelInfo["path"]>;
}
export interface IAddModelResponse {
    newModel: IAddModelResponseNewModel;
}
export interface IUpdateOrganizationsCalculatedInfoRequest {
    values: Array<{
        orgId: string;
        calcInfo: IOrganizationCalculatedInfo;
    }>;
}
export interface IUndoCheckoutRequest {
    ID: IModelInfo["ID"];
}
export interface IUndoCheckoutResponse {
    modelData: FileSystemModel;
}
export interface IDeleteFolderRequest {
    name: string;
    path: string;
    ownerId: string;
    appID: ObjectID;
}
export interface IDeleteFolderResponse {
    deletedCount: number;
}
export interface IUpdateFolderRequest {
    source: {
        name: IFolder["name"];
        path: IFolder["path"];
        ownerId: IFolder["owner"]["ID"];
    };
    target: {
        address?: {
            name: IFolder["name"];
            path: IFolder["path"];
        };
        owner?: {
            id: IFolder["owner"]["ID"];
            type: IFolder["owner"]["objectType"];
        };
    };
}
export interface IUpdateFolderResponse {
    updatedModelOwnerId?: IModel["owner"]["ID"];
    updatedModelOwnerTypes?: IModel["owner"]["objectType"];
    updatedModels: Array<{
        ID: IModel["ID"];
        path?: IModel["path"];
    }>;
}
export interface IBoAddAnnouncementRequest {
    text: IAnnouncementServiceObj["text"];
    startDate?: IAnnouncementServiceObj["startDate"];
    endDate?: IAnnouncementServiceObj["endDate"];
    isActive: IAnnouncementServiceObj["isActive"];
    displayType: IAnnouncementServiceObj["displayType"];
}
export interface IBoAddAnnouncementResponse {
    announcement: IAnnouncementDataObj;
}
export interface IBoAddAnnouncementResponseConsumer {
    announcement: IAnnouncementServiceObj;
}
export interface IBoUpdateAnnouncementRequest {
    id: IAnnouncementServiceObj["id"];
    text?: IAnnouncementServiceObj["text"];
    startDate?: IAnnouncementServiceObj["startDate"];
    endDate?: IAnnouncementServiceObj["endDate"];
    isActive?: IAnnouncementServiceObj["isActive"];
    displayType?: IAnnouncementServiceObj["displayType"];
}
export interface IBoUpdateAnnouncementResponse {
    announcement: IAnnouncementDataObj;
}
export interface IBoUpdateAnnouncementResponseConsumer {
    announcement: IAnnouncementServiceObj;
}
export interface IBoUpdateAnnouncementConsumerResponse {
    announcement: IAnnouncementDataObj;
}
export interface IBoUpdateAnnouncementConsumerResponseConsumer {
    announcement: IAnnouncementServiceObj;
}
export interface IBoDeleteAnnouncementRequest {
    id: IAnnouncementServiceObj["id"];
}
export interface IBoListAnnouncementsResponse {
    announcements: Array<IAnnouncementDataObj>;
}
export interface IBoListAnnouncementsResponseConsumer {
    announcements: Array<IAnnouncementServiceObj>;
}
export interface IListAnnouncementsResponse {
    announcements: Array<IAnnouncementDataObj>;
}
export interface IListAnnouncementsResponseConsumer {
    announcements: Array<IAnnouncementServiceObj>;
}
export interface IReleaseApplicationRequest {
    appID: ObjectID;
    appVersionIncType: VersionIncType;
    models: Array<{
        modelID: string;
        version: string;
        modelName: string;
        path: string;
        ownerType?: "module" | "application";
        ownerName?: string;
    }>;
    shortComment?: string;
    basedVersion?: string;
}
export interface IDeleteApplicationVersionRequest {
    versionID: ObjectID;
}
export interface IDeleteApplicationVersionResponse {
    versionID: ObjectID;
}
export interface IGenerateTokenRequest {
    appID: ObjectID;
}
export interface IGenerateTokenResponse {
    ID: ObjectID;
    appID: ObjectID;
    externalToken: IExternalToken;
}
export interface IDeleteTokenRequest {
    appID: ObjectID;
    token: UUID;
}
export interface IDeleteTokenResponse {
    ID: ObjectID;
    deleted: boolean;
}
export interface IValidateTokenRequest {
    appID: ObjectID;
    token: UUID;
}
export interface IValidateTokenResponse {
    valid: boolean;
    pairingToken?: UUID;
}
export interface IGetAppInfoWtihTokenRequest {
    token?: string;
    isMock?: boolean;
}
export interface IGetAppInfoWithTokenResponse {
    application?: {
        ID: IApplicationDbModel["ID"];
        name: IApplicationDbModel["name"];
        createDate: IApplicationDbModel["createDate"];
        createdBy: IApplicationDbModel["createdBy"];
        updateDate?: IApplicationDbModel["updateDate"];
        updatedBy?: IApplicationDbModel["updatedBy"];
    };
    token: string;
}
export interface IGetAppActiveTokenResponse {
    tokenCount: number;
    token?: string;
}
export interface IGetAppActiveTokenResponse {
    tokenCount: number;
    token?: string;
}
export interface IGetApplicationVersionsRequest {
    applicationId?: string;
    token?: string;
    isMock?: boolean;
}
export interface IGetApplicationVersionsResponse {
    versions: Array<IApplicationVersion>;
    token: string;
}
export interface IUpdateApplicationVersionRequest {
    versionId: string;
    artifactId: string;
    organizationId: string;
}
export interface IAddAppVersionPackJobRequest {
    appVersionID: string;
}
export interface IGetAppVersionArtifactInfoWithTokenRequest {
    token?: string;
    appVersionId?: string;
    artifactType?: keyof IApplicationVersionArtifacts;
}
export interface IGetAppVersionArtifactInfoWithTokenResponse {
    artifactUrl: string;
}
export interface ICreateWorkflowExportJobRequest {
    jobID: string;
    appID: string;
    items: Array<IWorkflowExportItem>;
}
export interface IGetFileSystemModelsRequest {
    fileSystemIds: Array<string | {
        id: string;
        version: string;
    }>;
}
export interface IListTreeViewItemsRequest {
    applicationID: string;
    moduleFilter?: {
        modules: Array<string>;
        appendApp: boolean;
    };
}
export interface ICreateTagDefinitionRequest {
    mainOrganizationId: ObjectID;
    tag: {
        targets: {
            apps: {
                isRequired: boolean;
            };
        };
        type: TagType;
        name: string;
        description: string;
        createdBy: string;
        ownerUser: ObjectID;
    };
}
export interface ICreateTagDefinitionResponse {
    tagDefinition: ITagDefinition;
}
export interface IDeleteTagDefinitionRequest {
    mainOrganizationId: ObjectID;
    tagDefId: ObjectID;
}
export interface IDeleteTagDefinitionResponse {
    deletedTagId: ObjectID;
}
export interface IUpdateTagDefinitionRequest {
    mainOrganizationId: ObjectID;
    ID: ObjectID;
    tag: {
        targets: {
            apps: {
                isRequired: boolean;
            };
        };
        type: TagType;
        description: string;
    };
}
export interface IUpdateTagDefinitionResponse {
    tagDefinition: ITagDefinition;
}
export interface ISaveTagValuesRequest {
    appID: ObjectID;
    mainOrganizationID: ObjectID;
    updatedTags: ITagValue[];
}
export interface ISaveTagValuesResponse {
}
export interface IUpsertAllOrgApplicationsRequest {
    applications: Array<IAllOrgGroupApplicationData>;
}
export interface IListAllOrgApplicationsRequest {
    mainOrganizationID: ObjectID;
}
export interface IListAllOrgApplicationsResponse {
    applications: Array<IAllOrgGroupApplicationData>;
}
export type IListExportJobStepsResponse = Array<IExportJobStepDbItem>;
export interface ICloneOrgResponseModelInfoBase {
    /**
     * <<modelId/modelBodyKey>> veya <<path/fullName>>
     */
    path: NonNullable<IModelInfo["path"]>;
    modelType: IModelInfo["modelType"];
    /**
     * Bu 02.08.2025'de henüz geçerli değil (api prod çıkmadı daha)
     */
    modelName: IModelInfo["name"];
}
export interface ICloneOrgResponseModelHistoryInfo extends ICloneOrgResponseModelInfoBase {
    type: "hist";
    modelID: IModelHistoryInfo["modelID"];
    historyType: IModelHistoryInfo["historyType"];
}
export interface ICloneOrgResponseModelInfoNorm extends ICloneOrgResponseModelInfoBase {
    type: "norm";
}
export type ICloneOrgResponseModelInfo = ICloneOrgResponseModelHistoryInfo | ICloneOrgResponseModelInfoNorm;
export interface ILegacyRequests {
    cloneOrgRequest: {
        organizationId: string;
        legacyVersion: string;
        legacyDeleteVersion?: string;
    };
    cloneOrgResponse: {
        orgModelPaths: Array<ICloneOrgResponseModelInfoNorm>;
        orgModelHistoryPaths: Array<ICloneOrgResponseModelHistoryInfo>;
        cloneMessages: Array<{
            msg: string;
            level: "log" | "warning";
        }>;
    };
    listOrganizationsRequest: {};
    listOrganizationsResponse: {
        organizations: Array<IOrganization>;
    };
}
export {};
//# sourceMappingURL=symDtoObjects.d.ts.map