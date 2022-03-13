import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayButtonComponent } from './play-button/play-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PlayButtonComponent],
  exports: [PlayButtonComponent],
})
export class ClientUiPlayButtonModule {}
