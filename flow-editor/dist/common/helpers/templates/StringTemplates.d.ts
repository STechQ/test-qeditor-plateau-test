export declare enum StringTemplates {
    Alphanumeric = "$[a-zA-Z0-9]^",
    OnlyAlphabetic = "$[a-zA-Z]^",
    Email = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    TurkishMobilePhone = "^5[0-9]{9}$",
    InternationalPhone = "^\\+?[1-9][0-9]{7,14}$",
    Numeric = "$[0-9]^",
    UppercaseLetters = "$[A-Z]^",
    LowercaseLetters = "$[a-z]^",
    URL = "^(https?:\\/\\/)?(www\\.)?[a-zA-Z0-9\\-\\.]+\\.[a-zA-Z]{2,}(/\\S*)?$",
    DateISO = "^[0-9]{4}-[0-9]{2}-[0-9]{2}$",
    Time24Hour = "^([01]?[0-9]|2[0-3]):[0-5][0-9]$",
    IPAddress = "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
    Username = "^[a-zA-Z0-9._-]{3,}$",
    Password = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
    CreditCard = "^([0-9]{4}-){3}[0-9]{4}$",
    MultipleEmail = "^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,};)*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})$"
}
//# sourceMappingURL=StringTemplates.d.ts.map