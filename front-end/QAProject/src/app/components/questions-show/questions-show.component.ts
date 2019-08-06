import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { QuestionModel } from 'src/app/shared/models/question.model';
import { UserModel } from 'src/app/shared/models/user.model';
import { QuestionService } from 'src/app/shared/services/question.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-show',
  templateUrl: './questions-show.component.html',
  styleUrls: ['./questions-show.component.css']
})
export class QuestionsShowComponent implements OnInit {

  @Input() label:string;
  @Input() questions : QuestionModel[] = null;
  user :UserModel;
  constructor(private questionService: QuestionService, private userService : UserService, private router :Router) { }

  ngOnInit() {
    this.userService.login("Chani Turzin", "222").subscribe((response : UserModel)=>{
      this.user = response;
      console.log(this.user);
    },
    (error: HttpErrorResponse)=>{
  console.log(error);
    });
  }
  addRequirement(item: QuestionModel ){
   console.log(item);
   item.requirement++;
    this.questionService.addRequirement(item, this.user).subscribe(()=>{
      alert("added requirement");
    },
    (error:HttpErrorResponse)=>{
      console.log(error);
    });

  }
  showQuestionAnswer(question:QuestionModel)
  {
    console.log(question);
    this.router.navigate(['questionAnswerShow'," question"]).then((e)=>{if(e){console.log("Nevigation is sucssesful!");
  }
else{
  console.log("Nevigation has failed")
}});
  }
}
