import { createReducer, on } from '@ngrx/store';
import { apiQuizActions, quizActions } from '../actions';

export const quizFeatureKey = 'gameQuizState';

export interface State {
  name: string;
  score: number;
  data: any[];
}

export const initialState: State = {
  name: '',
  score: 0,
  data: [],
};

export const reducer = createReducer(
  initialState,
  on(apiQuizActions.loadQuizDataSuccess, (state, { data }) => ({ ...state, data })),
  on(quizActions.setPlayerName, (state, { name }) => ({ ...state, name }))
);
