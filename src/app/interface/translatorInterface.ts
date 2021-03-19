// Google translate API expects this structure from us
export interface SendingObj {
    q: string;
    target: string;
}

// We expect this structure from the Google translate API's response
export interface ResultText {
    resultText: string;
}