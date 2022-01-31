import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientShellComponent } from './client-shell/client-shell.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ClientShellComponent
  ],
  exports: [
    ClientShellComponent
  ],
})
export class ClientShellModule {}
