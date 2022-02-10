import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizScoreBarComponent } from './quiz-score-bar/quiz-score-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QuizScoreBarComponent],
  exports: [QuizScoreBarComponent],
})
export class ClientUiQuizScoreModule {}
