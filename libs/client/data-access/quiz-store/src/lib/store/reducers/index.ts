import { Action, combineReducers } from '@ngrx/store';

import * as fromApiQuiz from './api-quiz.reducer';
import * as fromGameQuiz from './quiz.reducer';

export const quizFeatureKey = 'quizState';

export interface QuizState {
  [fromApiQuiz.apiQuizFeatureKey]: fromApiQuiz.State;
  [fromGameQuiz.quizGameFeatureKey]: fromGameQuiz.State;
}

export function reducers(state: QuizState | undefined, action: Action) {
  return combineReducers({
    [fromApiQuiz.apiQuizFeatureKey]: fromApiQuiz.reducer,
    [fromGameQuiz.quizGameFeatureKey]: fromGameQuiz.reducer,
  })(state, action);
}
