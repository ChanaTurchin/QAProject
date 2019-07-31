import { Component, OnInit, Input } from '@angular/core';
import { QuestionModel } from '../shared/models/question.model';
import { QuestionService } from '../shared/services/question.service';
import { error } from '@angular/compiler/src/util';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-questions-show',
  templateUrl: './questions-show.component.html',
  styleUrls: ['./questions-show.component.css']
})
export class QuestionsShowComponent implements OnInit {

  @Input()  label:string;
  @Input()  questions : QuestionModel[] = null;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }
  onclick(item: QuestionModel ){
   console.log(item);
    this.questionService.addRequirement(item).subscribe(()=>{
      alert("added requirement");
    },
    (error:HttpErrorResponse)=>{
      console.log(error);
    });

  }
}
