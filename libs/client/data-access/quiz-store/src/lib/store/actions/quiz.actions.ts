import { createAction, props } from '@ngrx/store';

export enum QuizActions {
  setPlayerName = '[Quiz] Set Name',
  nextLevel = '[Quiz] Next Level',
  nextLevelSuccess = '[Quiz] Next Level Success',
  gameOver = '[Quiz] Game Over',
}

export const setPlayerName = createAction(
  QuizActions.setPlayerName,
  props<{ playerName: string }>()
);

export const nextLevel = createAction(QuizActions.nextLevel);
export const nextLevelSuccess = createAction(QuizActions.nextLevelSuccess);
export const gameOver = createAction(QuizActions.gameOver);
