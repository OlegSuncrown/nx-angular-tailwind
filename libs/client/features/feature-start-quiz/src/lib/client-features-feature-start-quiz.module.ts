import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { ClientUiQuizButtonModule } from '@nx/client/ui/quiz-button';

const routes: Routes = [{ path: '', component: StartQuizComponent }];

@NgModule({
  imports: [
    CommonModule,
    ClientUiQuizButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [StartQuizComponent],
})
export class ClientFeatureStartQuizModule {}
