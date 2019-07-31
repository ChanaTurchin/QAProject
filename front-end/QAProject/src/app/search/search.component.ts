import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/services/search.service';
import { state } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { QuestionModel } from '../shared/models/question.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // = [new QuestionModel(1,"aaa",null,7,null,null,null,null,0),
  // new QuestionModel(2,"bbb",null,7,null,null,null,null,0)]
  public questions: QuestionModel[];
  searchText:string = null;
  constructor(private searchService: SearchService) { }
  label: string = "The questions tha found";

  ngOnInit() {
  }

  search(){
    this.searchService.search(this.searchText).subscribe((response: QuestionModel[])=>{
      alert("we searched the question");
      console.log("The state is: " + state);
      this.questions = response;
    },
    (error:HttpErrorResponse)=>{
      console.log(error);
    });
  }
}

