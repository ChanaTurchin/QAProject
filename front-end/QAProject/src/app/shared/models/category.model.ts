import { QuestionModel } from './question.model';

export class CategoryModel {
    constructor(
        public categoryId: number,
        public categoryName: string,
        public questions: QuestionModel[]
    ) { }
}