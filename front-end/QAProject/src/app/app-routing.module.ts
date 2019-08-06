import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { AddAnswerComponent } from './components/add-answer/add-answer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { QuestionAnswersShowComponent } from './components/question-answers-show/question-answers-show.component';


const routes: Routes = [
  {path: '', component: SearchComponent},
  {path:'login', component: LoginComponent},
  {path:'register/:userName/:userPassword', component:RegisterComponent},
  {path:'register', component:RegisterComponent},
  {path:'addQuestion', component : AddQuestionComponent},
  {path:'addAnswer', component:AddAnswerComponent},
  {path:'questionAnswerShow', redirectTo:'search'},
  {path:'questionAnswerShow/:question', component:QuestionAnswersShowComponent},
  {path:'search', component:SearchComponent},
  {path:'not-found', component: PageNotFoundComponent},
  {path:'**', redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

