import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCardComponent } from './question-card/question-card.component';

import { ClientUiAudioSliderModule } from '@nx/client/ui/audio-slider';
import { ClientUiPlayButtonModule } from '@nx/client/ui/play-button';

@NgModule({
  imports: [CommonModule, ClientUiAudioSliderModule, ClientUiPlayButtonModule],
  declarations: [QuestionCardComponent],
  exports: [QuestionCardComponent],
})
export class ClientFeatureQuestionCardModule {}
