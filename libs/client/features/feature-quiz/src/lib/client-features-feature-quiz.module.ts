import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { RouterModule, Routes } from '@angular/router';

import { ClientUiQuizScoreModule } from '@nx/client/ui/quiz-score';
import { ClientUiQuizNavModule } from '@nx/client/ui/quiz-nav';

const routes: Routes = [{ path: '', component: QuizComponent }];

@NgModule({
  imports: [CommonModule, ClientUiQuizNavModule, ClientUiQuizScoreModule, RouterModule.forChild(routes)],
  declarations: [QuizComponent],
})
export class ClientFeatureQuizModule {}
