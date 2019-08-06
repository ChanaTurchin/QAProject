import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersShowComponent } from './answers-show.component';

describe('AnswersShowComponent', () => {
  let component: AnswersShowComponent;
  let fixture: ComponentFixture<AnswersShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswersShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
