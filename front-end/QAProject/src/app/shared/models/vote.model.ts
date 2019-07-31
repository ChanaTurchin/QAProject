import { UserModel } from "src/app/shared/models/user.model";
import { QuestionModel } from './question.model';

export class VoteModel {
    constructor(
        public voteId:number,
        public questionId:number,
        public userId:number,
        public question:QuestionModel,
        public user:UserModel
    ){}
}