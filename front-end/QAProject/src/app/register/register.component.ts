import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../shared/models/user.model';

export class ClassModel{
  constructor(public id:number, public value:string ){};
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  public user: UserModel = new UserModel(0, "", "", "", null, 0, 0, false, 0);
  grades_list:ClassModel[] = [ new ClassModel(5,"ה'"),  new ClassModel(6,"ו'"),  new ClassModel(7,"ז'")];
  groups_list:number[] = [1,2,3];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register1() {
    console.log("try to register ");
    this.userService.register(this.user).subscribe(() => {
      alert("registered");
      //console.log(state);
    },
      (error: HttpErrorResponse) => {
        console.log(error);
      });
  }
}
