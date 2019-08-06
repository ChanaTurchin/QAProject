import { Component, OnInit, Input } from '@angular/core';
import { QuestionModel } from 'src/app/shared/models/question.model';
import {Router, ActivatedRoute, Params}from '@angular/router'

@Component({
  selector: 'app-question-answers-show',
  templateUrl: './question-answers-show.component.html',
  styleUrls: ['./question-answers-show.component.css']
})
export class QuestionAnswersShowComponent implements OnInit {

  question:QuestionModel;

  constructor(
     private route:ActivatedRoute,
     private router:Router ) 
     { 
       this.route.params.subscribe((params:Params)=> {
         this.question = params.question;
       });
     }

  ngOnInit() {
    console.log('the question is'+this.question);
  }

}
