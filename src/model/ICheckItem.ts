import { URL } from "url";

enum Severity {
    High,
    Medium,
    Low
}

enum Status {
    NotVerified,
    Open,
    Fulfilled,
    NA
}

export interface ICheckItem {
    Category: string;
    Subcategory: string;
    Text: string;
    Guid: string;
    ha: number;
    Severity: Severity;
    Link?: URL;
}

export interface ICheckItemAnswered extends ICheckItem {
    Status: Status;
}