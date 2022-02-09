import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientShellComponent } from './client-shell/client-shell.component';

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
          import('@nx/client/features/feature-start-quiz').then(
            (m) => m.ClientFeatureStartQuizModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [ClientShellComponent],
})
export class ClientShellModule {}
