import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswersShowComponent } from './question-answers-show.component';

describe('QuestionAnswersShowComponent', () => {
  let component: QuestionAnswersShowComponent;
  let fixture: ComponentFixture<QuestionAnswersShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAnswersShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswersShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
