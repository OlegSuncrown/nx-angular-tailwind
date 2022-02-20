import { createAction, props } from '@ngrx/store';

enum Actions {
  loadData = '[Quiz/API] Load Data',
  loadDataSuccess = '[Quiz/API] Load Data Success',
  loadFailure = '[Quiz/API] Load Data Failure',
}

export const loadQuizData = createAction(Actions.loadData);

export const loadQuizDataSuccess = createAction(
  Actions.loadDataSuccess,
  props<{ data: any[] }>()
);

export const loadQuizDataFailure = createAction(
  Actions.loadFailure,
  props<{ error: string }>()
);