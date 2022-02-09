import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { ClientUiQuizButtonModule } from '@nx/client/ui/quiz-button';

const routes: Routes = [{ path: '', component: StartQuizComponent }];

@NgModule({
  imports: [CommonModule, ClientUiQuizButtonModule, RouterModule.forChild(routes)],
  declarations: [StartQuizComponent],
})
export class ClientFeatureStartQuizModule {}
