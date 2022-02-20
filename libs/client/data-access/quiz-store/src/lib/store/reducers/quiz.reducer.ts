import { createReducer, on } from '@ngrx/store';
import { apiQuizActions, quizActions } from '../actions';
import { QuizSection } from '@nx/shared/types/api-quiz';

export const quizGameFeatureKey = 'gameQuizState';

export interface State {
  name: string;
  score: number;
  data: QuizSection[];
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
