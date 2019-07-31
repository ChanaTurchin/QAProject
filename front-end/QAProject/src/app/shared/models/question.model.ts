import { AnswerModel } from "src/app/shared/models/answer.model";
import { UserModel } from "src/app/shared/models/user.model";
import { VoteModel } from "src/app/shared/models/vote.model";
import { QuestionItemModel } from './question-item.model';
import { CategoryModel } from './category.model';

export class QuestionModel {
    constructor(
        public questionId:number,
        public questionTitle:string,
        public items:QuestionItemModel[],
        public question_userId:number,
        public answers:AnswerModel[],
        public categories:CategoryModel[],
        public user:UserModel,
        public vote:VoteModel[] ,
        public requirement?:number,
        public questionDate?:Date
    ){}
}


/*
export class QuestionModel {
    constructor(
        public questionId:number,
        public questionTitle:string,
        public items:QuestionItemModel[],
        public question_userId:number,
        public answers:AnswerModel[],
        public categories:CategoryModel[],
        public user:UserModel,
        public vote:VoteModel[] ,
        public requirement?:number,
        public questionDate?:Date
    ){}
}*/