import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromQuizStore from './store/reducers';
import { QuizStoreEffects } from './store/quiz-store.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature({
      name: fromQuizStore.quizFeatureKey,
      reducer: fromQuizStore.reducers,
    }),
    EffectsModule.forFeature([QuizStoreEffects]),
  ],
})
export class QuizStoreModule {}
