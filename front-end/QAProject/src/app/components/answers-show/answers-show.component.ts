import { Component, OnInit, Input } from '@angular/core';
import { AnswerModel } from 'src/app/shared/models/answer.model';

@Component({
  selector: 'app-answers-show',
  templateUrl: './answers-show.component.html',
  styleUrls: ['./answers-show.component.css']
})
export class AnswersShowComponent implements OnInit {

  @Input()
  answers:AnswerModel[];
  constructor() { }

  ngOnInit() {
  }

}
