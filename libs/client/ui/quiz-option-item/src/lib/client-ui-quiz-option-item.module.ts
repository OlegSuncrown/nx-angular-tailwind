import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizOptionItemComponent } from './quiz-option-item/quiz-option-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QuizOptionItemComponent],
  exports: [QuizOptionItemComponent],
})
export class QuizOptionItemModule {}
