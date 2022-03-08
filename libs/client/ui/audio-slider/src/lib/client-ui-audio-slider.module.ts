import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioSliderComponent } from './audio-slider/audio-slider.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AudioSliderComponent],
  exports: [AudioSliderComponent],
})
export class ClientUiAudioSliderModule {}
