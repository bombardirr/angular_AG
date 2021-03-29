// Google translate API expects this structure from us
export interface SendingObj {
    q: string;
    target: string;
}

// We expect this structure from the Google translate API's response
export interface ResultText {
    resultText: string;
}

// This structure will go to the view
export interface HistoryObj {
    initLang: string;
    initText: string;
    targetLang: string;
    targetText: string;
}

// The interface for the collection of languages
export interface LangObj {
    langShort: string;
    langLong: string;
}
