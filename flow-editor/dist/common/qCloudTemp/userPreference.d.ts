export interface IUserPreferences {
    userId: string;
    emailConsent: boolean;
}
export interface IUserPreferenceHistory {
    userId: string;
    userEmail: string;
    name: keyof Omit<IUserPreferences, "userId">;
    value: any;
    reason: "new" | "update" | "userDelete";
    date: Date;
}
//# sourceMappingURL=userPreference.d.ts.map