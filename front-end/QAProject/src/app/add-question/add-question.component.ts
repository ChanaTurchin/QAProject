import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { QuestionService } from '../shared/services/question.service';
import { QuestionItemModel } from '../shared/models/question-item.model';
import { QuestionItemTypeEnum } from '../shared/enums/question-item-type.enum';
import { FileService } from '../shared/services/file.service';
import { environment } from 'src/environments/environment';
import { CategoryService } from '../shared/services/category.service';
import { MultiSelectModel } from '../multi-select/multi-select.component';
import { QuestionModel } from '../shared/models/question.model';
import { CategoryModel } from '../shared/models/category.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public question: QuestionModel = new QuestionModel(0, "", [new QuestionItemModel(QuestionItemTypeEnum.Text, "")], 7, null, null, null, null, 0, new Date());
  public categories: CategoryModel[] = [];
  public multiSelectList: MultiSelectModel[] = [];

  constructor(private questionService: QuestionService, private fileService: FileService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe((response: CategoryModel[]) => {
      this.categories = response;
      this.multiSelectList = response.map((category: CategoryModel) => new MultiSelectModel(category.categoryId, category.categoryName));
    }, (error: HttpErrorResponse) => {
      console.log(error)
    })
  }

  add_question() {
    this.questionService.add_question(this.question).subscribe(() => {
      alert("added the question");
      console.log(this.question);
    },
      (error: HttpErrorResponse) => {
        console.log(error);
      });
  }

  addText() {
    this.question.items.push(new QuestionItemModel(QuestionItemTypeEnum.Text, ""));
  }

  attachFile() {
    this.question.items.push(new QuestionItemModel(QuestionItemTypeEnum.Image, null));
  }

  uploadFile(event, index: number) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.fileService.uploadFile(file).subscribe((response: string) => {
        let fileName: string = response;
        this.question.items[index].value = fileName;
      },
        (error: HttpErrorResponse) => {
          console.log(error);
        })
    }
  }

  getImageSrc(fileName: string): string {
    return `${environment.apiEndPoint}/Files/Images/${fileName}`;
  }

  onCategoriesChange(categories: number[]) {
    this.question.categories = categories.map((categoryId: number) => {
      let category = this.categories.find((c: CategoryModel) => c.categoryId == categoryId);
      return category;
    });
  }
}

