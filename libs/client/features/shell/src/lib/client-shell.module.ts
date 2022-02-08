import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientShellComponent } from './client-shell/client-shell.component';
import { ClientUiQuizButtonModule } from '@nx/client/ui/quiz-button';

@NgModule({
  imports: [CommonModule, ClientUiQuizButtonModule],
  declarations: [ClientShellComponent],
  exports: [ClientShellComponent],
})
export class ClientShellModule {}
