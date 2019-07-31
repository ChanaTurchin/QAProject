import { QuestionItemTypeEnum } from '../enums/question-item-type.enum';

export class QuestionItemModel {
    constructor(
        public type: QuestionItemTypeEnum,
        public value: string
    ) { }
}