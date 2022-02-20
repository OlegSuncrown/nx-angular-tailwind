import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromQuizStore from './store/reducers';

@NgModule({
  imports: [CommonModule,   StoreModule.forFeature({
    name: fromQuizStore.quizFeatureKey,
    reducer: fromQuizStore.reducers,
  }),],
})
export class QuizStoreModule {}
