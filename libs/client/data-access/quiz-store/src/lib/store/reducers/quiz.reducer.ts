import { createReducer, on } from '@ngrx/store';
import { QuizSection } from '@nx/shared/types/api-quiz';
import { loadQuizDataSuccess, setPlayerName } from '../actions';

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
  on(loadQuizDataSuccess, (state, { data }) => ({ ...state, data })),
  on(setPlayerName, (state, { name }) => ({ ...state, name }))
);
