export interface IUserFeedback {
    id: string;
    userId: string;
    email: string;
    type: string;
    description: string;
    date: Date;
}
export interface IFeedbackAttachment {
    contentBase64: string;
    filename: string;
    contentType: string;
}
//# sourceMappingURL=feedback.d.ts.map