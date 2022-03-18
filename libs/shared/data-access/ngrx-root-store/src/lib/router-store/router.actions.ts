import { createAction, props } from '@ngrx/store';

export const navigateTo = createAction(
  '[Router] HOME',
  props<{ url: string }>()
);