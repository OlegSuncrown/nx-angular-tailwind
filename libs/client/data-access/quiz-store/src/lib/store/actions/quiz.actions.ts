import { createAction, props } from '@ngrx/store';

enum QuizActions {
  setPlayerName = '[Quiz] Set Name',
}

export const setPlayerName = createAction(
  QuizActions.setPlayerName,
  props<{ name: string }>()
);