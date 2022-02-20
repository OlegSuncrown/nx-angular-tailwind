import { createReducer, on } from '@ngrx/store';
import { apiQuizActions } from '../actions';
export const apiQuizFeatureKey = 'apiQuizState';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  error: string | null;
}

export const initialState: State = {
  isLoading: false,
  isLoaded: false,
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(apiQuizActions.loadQuizData, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    error: null,
  })),

  on(apiQuizActions.loadQuizDataSuccess, (state) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    error: null,
  })),

  on(apiQuizActions.loadQuizDataFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
    isLoaded: false,
  }))
);
