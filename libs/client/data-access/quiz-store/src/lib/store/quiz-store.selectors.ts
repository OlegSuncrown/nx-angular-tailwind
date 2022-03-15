import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SelectedOption } from '@nx/shared/types/api-quiz';
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

export const selectProgressAnimation = createSelector(
  selectGameQuizState,
  (quizState) => {
    if (quizState.data.length) {
      const lastProgressItem = 100 / quizState.data.length / 2;
      const progressFrame = (100 - lastProgressItem) / (quizState.data.length - 1);

      // If last question completed progress bar width is 100%
      if (quizState.currentLevel >= quizState.data.length - 1) {
        return 100;
      }

      return progressFrame * (quizState.currentLevel + 1);
    }

    return 0;
  }
);

export const selectCurrentGenre = createSelector(selectGameQuizState, (quizState) => {
  return quizState?.data[quizState.currentLevel]?.genre;
});

export const selectOptionSection = createSelector(selectGameQuizState, (quizState) => {
  const options = quizState?.data?.[quizState?.currentLevel]?.data;
  if (options) {
    return options.map((item) => {
      if (quizState.selectedOptions.includes(item.id)) {
        const isSelected =
          quizState?.currentQuestion?.id === item.id
            ? 'completed'
            : ('failed' as SelectedOption);
        return { ...item, isSelected };
      }
      return item;
    });
  }

  return options;
});

export const selectLevelIsCompleted = createSelector(selectGameQuizState, (quizState) => {
  return quizState?.levelIsCompleted;
});
