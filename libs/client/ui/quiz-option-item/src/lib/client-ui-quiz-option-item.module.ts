import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizOptionItemComponent } from './quiz-option-item/quiz-option-item.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [QuizOptionItemComponent],
  exports: [QuizOptionItemComponent],
})
export class QuizOptionItemModule {}
