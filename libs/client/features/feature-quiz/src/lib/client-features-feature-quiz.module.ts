import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { RouterModule, Routes } from '@angular/router';

import { ClientUiQuizScoreModule } from '@nx/client/ui/quiz-score';
import { ClientUiQuizNavModule } from '@nx/client/ui/quiz-nav';
import { ClientUiQuizButtonModule } from '@nx/client/ui/quiz-button';
import { ClientFeatureQuestionCardModule } from '@nx/client/features/feature-question-card';
import { QuizOptionItemModule } from '@nx/client/ui/quiz-option-item';
import { ClientFeatureOptionCardModule } from '@nx/client/features/feature-option-card';

const routes: Routes = [{ path: '', component: QuizComponent }];

@NgModule({
  imports: [
    CommonModule,
    ClientUiQuizNavModule,
    ClientUiQuizScoreModule,
    ClientUiQuizButtonModule,
    ClientFeatureQuestionCardModule,
    QuizOptionItemModule,
    ClientFeatureOptionCardModule,
    RouterModule.forChild(routes),
  ],
  declarations: [QuizComponent],
})
export class ClientFeatureQuizModule {}
