import { createAction, props } from '@ngrx/store';
import { QuizItem } from '@nx/shared/types/api-quiz';

export enum QuizActions {
  setPlayerName = '[Quiz] Set Name',
  nextLevel = '[Quiz] Next Level',
  nextLevelSuccess = '[Quiz] Next Level Success',
  setOption = '[Quiz] Set Option',
  gameOver = '[Quiz] Game Over',
}

export const setPlayerName = createAction(
  QuizActions.setPlayerName,
  props<{ playerName: string }>()
);

export const setOption = createAction(
  QuizActions.setOption,
  props<{ selectedOption: string }>()
);

export const nextLevel = createAction(QuizActions.nextLevel);
export const nextLevelSuccess = createAction(QuizActions.nextLevelSuccess);
export const gameOver = createAction(QuizActions.gameOver);
