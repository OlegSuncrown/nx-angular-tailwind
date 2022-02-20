import { createAction, props } from '@ngrx/store';
import { QuizSection } from '@nx/shared/types/api-quiz';

export enum QuizApiActions {
  loadData = '[Quiz/API] Load Data',
  loadDataSuccess = '[Quiz/API] Load Data Success',
  loadFailure = '[Quiz/API] Load Data Failure',
}

export const loadQuizData = createAction(QuizApiActions.loadData);

export const loadQuizDataSuccess = createAction(
  QuizApiActions.loadDataSuccess,
  props<{ data: QuizSection[] }>()
);

export const loadQuizDataFailure = createAction(
  QuizApiActions.loadFailure,
  props<{ error: string }>()
);
