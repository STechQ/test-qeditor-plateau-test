export interface IUserRequest {
    id: string;
    createDate: Date;
    senderUserId: string;
    status: "new";
    details: IUserPremiumAccountRequestDetails;
}
export interface IUserPremiumAccountRequestDetails {
    type: "premiumAccount";
    orgDevCount: string;
    phoneNumber: string;
    companyName: string;
    sentOrganizationId: string;
}
//# sourceMappingURL=userRequest.d.ts.map