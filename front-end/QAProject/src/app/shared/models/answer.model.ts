import { UserModel } from "src/app/shared/models/user.model";
import { CommentModel } from "src/app/shared/models/comment.model";
import { QuestionModel } from './question.model';
import { QuestionAnswerItemModel } from './question-answer-item.model';

export class AnswerModel {
    constructor(
        public answerId:number,
        public questionId :number,
        public answer_userId :number,
        public fileName:string,
        public question:QuestionModel,
        public user:UserModel,
        public comments:CommentModel[],
        public items : QuestionAnswerItemModel[],
        public checked?:boolean,
        public answerDate?:Date
       
    ){}
}
