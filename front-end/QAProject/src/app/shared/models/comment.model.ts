import { UserModel } from "src/app/shared/models/user.model";
import { AnswerModel } from "src/app/shared/models/answer.model";

export class CommentModel {
    constructor(
        public commentId:number,
        public commentBody:string,
        public answer:AnswerModel,
        public user:UserModel,
        public answerId?:UserModel,
        public commentUserId?:number,
        public commentDate?:Date
    ){}
}