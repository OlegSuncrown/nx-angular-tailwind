import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { ClientUiQuizButtonModule } from '@nx/client/ui/quiz-button';

const routes: Routes = [{ path: '', component: SummaryComponent }];

@NgModule({
  imports: [CommonModule, ClientUiQuizButtonModule, RouterModule.forChild(routes)],
  declarations: [SummaryComponent],
  exports: [SummaryComponent],
})
export class ClientFeatureSummaryModule {}
