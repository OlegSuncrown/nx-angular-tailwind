import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromQuizStore from './reducers/quiz-store.reducer';

export const selectQuizStoreState = createFeatureSelector<fromQuizStore.State>(
  fromQuizStore.quizStoreFeatureKey
);
