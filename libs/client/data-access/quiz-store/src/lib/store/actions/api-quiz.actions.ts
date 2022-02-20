import { createAction, props } from '@ngrx/store';
import { QuizSection } from '@nx/shared/types/api-quiz';

enum Actions {
  loadData = '[Quiz/API] Load Data',
  loadDataSuccess = '[Quiz/API] Load Data Success',
  loadFailure = '[Quiz/API] Load Data Failure',
}

export const loadQuizData = createAction(Actions.loadData);

export const loadQuizDataSuccess = createAction(
  Actions.loadDataSuccess,
  props<{ data: QuizSection[] }>()
);

export const loadQuizDataFailure = createAction(
  Actions.loadFailure,
  props<{ error: string }>()
);
