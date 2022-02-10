import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizNavComponent } from './quiz-nav/quiz-nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QuizNavComponent],
  exports: [QuizNavComponent],
})
export class ClientUiQuizNavModule {}
