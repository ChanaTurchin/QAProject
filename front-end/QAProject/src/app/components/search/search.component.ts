import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../shared/services/search.service';
import { state } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { QuestionModel } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public questions: QuestionModel[];
  searchText:string = null;
  constructor(private searchService: SearchService) { }
  label: string = "The questions tha found: ";

  ngOnInit() {
  }

  search(){
      this.searchService.search(this.searchText).subscribe((response: QuestionModel[])=>{
      console.log("The state is: " + state);
      // this.router.navigate(['search', '/questionsShow', response, this.label]);
      this.questions = response;
    },
    (error:HttpErrorResponse)=>{
      console.log(error);
    });
  }
}

