export interface SurveyQuestion {
    id: number;
    question: string;
    questionTypeId: number;
    surveyTypeId: number;
    questionTypeName: string;
    surveyTypeName: string;
    piping: string;
    audio: string;
    video: string;
    image: string;
    status: string;
    createdDate: string;
    modifiedDate: string;
    isGrouping: boolean;
    sort: number;
    options: SurveyOption[];
}
export interface SurveyOption {
    id: number;
    option: string;
    image: string,
    createdDate: string,
    modifiedDate: string,
    keyword: string,
    status: string,
    isRandomize: boolean,
    isExcluded: boolean,
    group: number,
    sort: number,
    selected: boolean,
    isVisible: boolean,
    isSelected: boolean
}