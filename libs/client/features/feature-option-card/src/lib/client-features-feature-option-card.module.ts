import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionCardComponent } from './option-card/option-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OptionCardComponent],
  exports: [OptionCardComponent],
})
export class ClientFeatureOptionCardModule {}
