import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getSurveyQuestion(surveyId: number, surveyAttemptId: number,questionId:number,answer:string): Observable<any> {
    const url = `${this.apiUrl}/SurveyQuestion`;
    if(questionId==0){
      const params = { SurveyId: surveyId.toString(), SurveyAttemptId: surveyAttemptId.toString() };
      return this.http.post<any>(url, {}, { params });
    }else{
      const params = { SurveyId: surveyId.toString(), SurveyAttemptId: surveyAttemptId.toString(),QuestionId:questionId, Answer:answer.toString()};
      return this.http.post<any>(url, {}, { params });
    }
    
  }
}
