import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionModel } from '../models/question.model';
import { UserModel } from '../models/user.model';

@Injectable()
export class QuestionService {

  private baseUrl = environment.apiEndPoint + 'question/';

  constructor(private http:HttpClient) { }

  add_question(question: QuestionModel):Observable<any>{
    return this.http.post(this.baseUrl + 'addQuestion', question);
  }
  addRequirement(question:QuestionModel, user:UserModel):Observable<boolean>{
    console.log(question, user);
   var data = {'question' : question, 'user' : user};
    return this.http.post(this.baseUrl + 'addRequirement', data) as Observable<boolean>;
  }
}
