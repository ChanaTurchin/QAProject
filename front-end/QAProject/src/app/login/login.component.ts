import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:UserModel = new UserModel(0, "", "", "", null, 0, 0, false, 0);
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  login1(){
    console.log("try to login");
    this.userService.login(this.user).subscribe(()=>{
      alert("logined");
    },
    (error: HttpErrorResponse) => {
      console.log(error);
      alert("You aren't registered")
    });
  }
}
