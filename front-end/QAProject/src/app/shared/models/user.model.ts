import { AnswerModel } from "src/app/shared/models/answer.model";

export class UserModel {
    constructor(
        public userId:number,
        public userName:string,
        public password:string,
        public pathDirectory:string,
        public answers:AnswerModel[],
        public grade?:number,
        public user_Group?:number,
        public IsPractitioner?:boolean,
        public points?:number
       
    ){}
}