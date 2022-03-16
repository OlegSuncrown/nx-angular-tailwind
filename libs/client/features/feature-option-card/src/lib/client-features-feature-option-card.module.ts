import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionCardComponent } from './option-card/option-card.component';

import { ClientUiAudioSliderModule } from '@nx/client/ui/audio-slider';
import { ClientUiPlayButtonModule } from '@nx/client/ui/play-button';
@NgModule({
  imports: [CommonModule, ClientUiAudioSliderModule, ClientUiPlayButtonModule],
  declarations: [OptionCardComponent],
  exports: [OptionCardComponent],
})
export class ClientFeatureOptionCardModule {}
