import { createAction, props } from '@ngrx/store';

export enum QuizActions {
  setPlayerName = '[Quiz] Set Name',
  newLevel = '[Quiz] New Level'
}

export const setPlayerName = createAction(
  QuizActions.setPlayerName,
  props<{ playerName: string }>()
);

export const newLevel = createAction(QuizActions.newLevel)