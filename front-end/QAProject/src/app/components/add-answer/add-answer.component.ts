import { Component, OnInit } from '@angular/core';
import { AnswerModel } from 'src/app/shared/models/answer.model';
import { QuestionAnswerItemModel } from 'src/app/shared/models/question-answer-item.model';
import { QuestionItemTypeEnum } from 'src/app/shared/enums/question-item-type.enum';
import { environment } from 'src/environments/environment';
import { FileService } from 'src/app/shared/services/file.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AnswerService } from 'src/app/shared/services/answer.service';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent implements OnInit {
  answer :AnswerModel = new AnswerModel(0, 44, 7, "", null, null, null, [new QuestionAnswerItemModel(QuestionItemTypeEnum.Text, "")], false, new Date())
  constructor(private fileService: FileService, private answerService : AnswerService) { }

  ngOnInit() {
  }

  addText() {
    this.answer.items.push(new QuestionAnswerItemModel(QuestionItemTypeEnum.Text, ""));
  }

  attachFile() {
    this.answer.items.push(new QuestionAnswerItemModel(QuestionItemTypeEnum.Image, null));
  }
  
  getImageSrc(fileName: string): string {
    return `${environment.apiEndPoint}/Files/Images/${fileName}`;
  }
  
  uploadFile(event, index: number) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.fileService.uploadFile(file).subscribe((response: string) => {
        let fileName: string = response;
        this.answer.items[index].value = fileName;
      },
        (error: HttpErrorResponse) => {
          console.log(error);
        })
    }
  }

  add_answer() {
    this.answerService.add_answer(this.answer).subscribe(() => {
      alert("added the answer");
      console.log(this.answer);
    },
      (error: HttpErrorResponse) => {
        console.log(error);
      });
  }

}
