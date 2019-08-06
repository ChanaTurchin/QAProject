//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatListModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddQuestionComponent } from './components/add-question/add-question.component'
import { SearchComponent}from './components/search/search.component'
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { QuestionsShowComponent } from './components/questions-show/questions-show.component';
//Services

import { UserService } from './shared/services/user.service';
import { QuestionService } from './shared/services/question.service';
import { AnswerService } from './shared/services/answer.service';
import { FileService } from './shared/services/file.service';
import { SearchService } from './shared/services/search.service';
import { CategoryService } from './shared/services/category.service';
import { AddAnswerComponent } from './components/add-answer/add-answer.component';
import { AnswersShowComponent } from './components/answers-show/answers-show.component';
import { QuestionAnswersShowComponent } from './components/question-answers-show/question-answers-show.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddQuestionComponent,
    SearchComponent,
    MultiSelectComponent,
    AddAnswerComponent,
    PageNotFoundComponent,
    QuestionsShowComponent,
    AnswersShowComponent,
    QuestionAnswersShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    UserService,
    QuestionService,
    AnswerService,
    FileService,
  SearchService,
CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
