import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionModel } from '../models/question.model';

@Injectable()
export class QuestionService {

  private baseUrl = environment.apiEndPoint + 'question/';

  constructor(private http:HttpClient) { }

  add_question(question: QuestionModel):Observable<any>{
    return this.http.post(this.baseUrl + 'addQuestion', question);
  }
  addRequirement(question:QuestionModel):Observable<boolean>{
    console.log(question);
   
    return this.http.post(this.baseUrl + 'addRequirement', question) as Observable<boolean>;
  }
}
