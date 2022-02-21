import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuizState, quizFeatureKey } from './reducers';
import { apiQuizFeatureKey } from './reducers/api-quiz.reducer';
import { quizGameFeatureKey } from './reducers/quiz.reducer';
import { generateRandomNum } from '@nx/shared/utils/generate-random-num';

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
  if (quizState?.data?.length) {
    const currentSection = quizState.data[quizState.currentLevel];
    const randomIndex = generateRandomNum(quizState.data.length - 1);
    const currentQuestion = currentSection.data[randomIndex];
    return currentQuestion;
  }
  return null;
});
