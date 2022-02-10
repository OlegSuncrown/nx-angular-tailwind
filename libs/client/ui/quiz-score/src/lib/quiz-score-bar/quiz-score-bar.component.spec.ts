import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScoreBarComponent } from './quiz-score-bar.component';

describe('QuizScoreBarComponent', () => {
  let component: QuizScoreBarComponent;
  let fixture: ComponentFixture<QuizScoreBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizScoreBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizScoreBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
