import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionModel } from '../models/question.model';

@Injectable()
export class SearchService {
  

  private baseUrl = environment.apiEndPoint + 'search/';
  constructor(private http: HttpClient) { }

  search(searchText:string):Observable<QuestionModel[]>{
    
    return this.http.get(this.baseUrl+'search?searchText=' + searchText) as Observable<QuestionModel[]>;
  }
}






