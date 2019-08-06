import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/shared/services/user.service';
import { UserModel } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName : string = "";
  public userPassword : string = "";
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }
  login1(){
    console.log("try to login");
    this.userService.login(this.userName, this.userPassword).subscribe((user:UserModel)=>{
      alert("logined");
        
    },
    (error: HttpErrorResponse) => {
      console.log(error);
      alert("You aren't logined");
      this.router.navigate(['register',"this.userName","this.userPassword"]).then((e)=>{
        if(e)
        {console.log("Nevigation is sucssesful!");}
        else
        {console.log("Nevigation has failed");}});
    });
  }
}
