import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {

    private baseUrl = environment.apiEndPoint + 'user/';

    constructor(private http: HttpClient) { }


    login(user: UserModel): Observable<any> {
        console.log(user);
        return this.http.post(this.baseUrl + 'login', user);
    }

    register(user: UserModel): Observable<any> {
        console.log("I success!!!!!!!!!!!!");
        console.log(user);
        return this.http.post(this.baseUrl + 'register', user);
    }
}