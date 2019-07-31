//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatListModule } from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddQuestionComponent } from './add-question/add-question.component'
import { SearchComponent}from './search/search.component'
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { QuestionsShowComponent } from './questions-show/questions-show.component';
import { AddAnswerComponent } from './add-answer/add-answer.component';

//Services
import { UserService } from './shared/services/user.service';
import { QuestionService } from './shared/services/question.service';
import { FileService } from './shared/services/file.service';
import { SearchService } from './shared/services/search.service';
import { CategoryService } from './shared/services/category.service';
import { AnswerService} from './shared/services/answer.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddQuestionComponent,
    SearchComponent,
    MultiSelectComponent,
    QuestionsShowComponent,
    AddAnswerComponent
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
    MatListModule
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
