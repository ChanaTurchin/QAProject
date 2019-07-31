import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnswerModel } from '../models/answer.model';

@Injectable()
export class AnswerService {

  private baseUrl = environment.apiEndPoint + 'answer/';

  constructor(private http:HttpClient) { }

  add_answer(answer: AnswerModel):Observable<any>{
    return this.http.post(this.baseUrl + 'addAnswer', answer);
  }
}
