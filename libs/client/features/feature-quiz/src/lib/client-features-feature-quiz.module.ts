import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: QuizComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [QuizComponent],
})
export class ClientFeatureQuizModule {}
