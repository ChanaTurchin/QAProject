import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';
import { Params } from '@angular/router';

@Injectable()
export class UserService {

    private baseUrl = environment.apiEndPoint + 'user/';

    constructor(private http: HttpClient) { }


    login(userName: string, userPassword: string): Observable<UserModel> {
        console.log(userName, userPassword);
        var data = {userName : userName, userPassword:userPassword};
       console.log(data);
        // let formData: FormData = new FormData();
        // formData.append('userName', userName);
        // formData.append('userPassword', userPassword);
        return this.http.post(this.baseUrl + 'login', data) as Observable<UserModel>;
    }

    register(user: UserModel): Observable<boolean> {
        console.log("I success!!!!!!!!!!!!");
        console.log(user);
        return this.http.post(this.baseUrl + 'register', user) as Observable<boolean>;
    }
}