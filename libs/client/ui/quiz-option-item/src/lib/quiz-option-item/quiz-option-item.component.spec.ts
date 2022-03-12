import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizOptionItemComponent } from './quiz-option-item.component';

describe('QuizOptionItemComponent', () => {
  let component: QuizOptionItemComponent;
  let fixture: ComponentFixture<QuizOptionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizOptionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizOptionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
