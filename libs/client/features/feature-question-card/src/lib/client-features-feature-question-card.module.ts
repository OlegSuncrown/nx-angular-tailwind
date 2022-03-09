import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientUiAudioSliderModule } from '@nx/client/ui/audio-slider';
import { QuestionCardComponent } from './question-card/question-card.component';
@NgModule({
  imports: [CommonModule, ClientUiAudioSliderModule],
  declarations: [
    QuestionCardComponent
  ],
  exports: [
    QuestionCardComponent
  ],
})
export class ClientFeatureQuestionCardModule {}
