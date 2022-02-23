import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuizState, quizFeatureKey } from './reducers';
import { apiQuizFeatureKey } from './reducers/api-quiz.reducer';
import { quizGameFeatureKey } from './reducers/quiz.reducer';

export const selectQuizState = createFeatureSelector<QuizState>(quizFeatureKey);

export const selectApiQuizState = createSelector(
  selectQuizState,
  (state) => state[apiQuizFeatureKey]
);

export const selectGameQuizState = createSelector(
  selectQuizState,
  (state) => state[quizGameFeatureKey]
);

export const selectCurrentQuestion = createSelector(selectGameQuizState, (quizState) => {
  return quizState.currentQuestion;
});
