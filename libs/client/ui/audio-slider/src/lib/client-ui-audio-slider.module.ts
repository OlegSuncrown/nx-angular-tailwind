import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioSliderComponent } from './audio-slider/audio-slider.component';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  imports: [CommonModule, MatSliderModule],
  declarations: [AudioSliderComponent],
  exports: [AudioSliderComponent],
})
export class ClientUiAudioSliderModule {}
