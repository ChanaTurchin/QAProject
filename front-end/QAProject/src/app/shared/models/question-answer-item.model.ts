import { QuestionItemTypeEnum } from '../enums/question-item-type.enum';

export class QuestionAnswerItemModel {
    constructor( public type: QuestionItemTypeEnum,
        public value: string){}
}
