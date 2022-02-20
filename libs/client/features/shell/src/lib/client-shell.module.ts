import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientShellComponent } from './client-shell/client-shell.component';
import { NgrxRootStoreModule } from '@nx/shared/data-access/ngrx-root-store';
import { QuizStoreModule } from '@nx/client/data-access/quiz-store';

const routes: Routes = [
  {
    path: '',
    component: ClientShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'start',
      },
      {
        path: 'start',
        loadChildren: () =>
          import('@nx/client/features/feature-start-quiz').then((m) => m.ClientFeatureStartQuizModule),
      },
      {
        path: 'quiz',
        loadChildren: () => import('@nx/client/features/feature-quiz').then((m) => m.ClientFeatureQuizModule),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), NgrxRootStoreModule, QuizStoreModule],
  declarations: [ClientShellComponent],
})
export class ClientShellModule {}
