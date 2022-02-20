import { createAction, props } from '@ngrx/store';

enum Actions {
  setPlayerName = '[Quiz] Set Name',
}

export const setPlayerName = createAction(
  Actions.setPlayerName,
  props<{ name: string }>()
);