import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizButtonDirective } from './quiz-button/quiz-button.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    QuizButtonDirective
  ],
  exports: [
    QuizButtonDirective
  ]
})
export class ClientUiQuizButtonModule {}
