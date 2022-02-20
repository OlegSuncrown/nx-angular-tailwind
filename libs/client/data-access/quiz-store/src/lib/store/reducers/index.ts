import { Action, combineReducers } from '@ngrx/store';

import * as fromApiQuiz from './api-quiz-store.reducer';
import * as fromGameQuiz from './quiz-store.reducer';

export const quizFeatureKey = 'quizState';

export interface AuthState {
  [fromApiQuiz.apiQuizFeatureKey]: fromApiQuiz.State;
  [fromGameQuiz.quizFeatureKey]: fromGameQuiz.State;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromApiQuiz.apiQuizFeatureKey]: fromApiQuiz.reducer,
    [fromGameQuiz.quizFeatureKey]: fromGameQuiz.reducer,
  })(state, action);
}
