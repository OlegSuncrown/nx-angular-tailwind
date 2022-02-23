import { createReducer, on } from '@ngrx/store';
import { QuizItem, QuizSection } from '@nx/shared/types/api-quiz';
import { loadQuizDataSuccess, setPlayerName } from '../actions';
import { generateRandomNum } from '@nx/shared/utils/generate-random-num';

export const quizGameFeatureKey = 'gameQuizState';

export interface State {
  playerName: string;
  score: number;
  currentLevel: number;
  isCompleted: boolean;
  data: QuizSection[];
  currentQuestion: QuizItem | null;
}

export const initialState: State = {
  playerName: '',
  score: 0,
  currentLevel: 0,
  isCompleted: false,
  data: [],
  currentQuestion: null,
};

export const reducer = createReducer(
  initialState,
  on(loadQuizDataSuccess, (state, { data }) => {
    const currentSection = data[state.currentLevel];
    const randomIndex = generateRandomNum(data.length - 1);
    const currentQuestion = currentSection.data[randomIndex];
    return { ...state, data, currentQuestion }
  }),
  on(setPlayerName, (state, { playerName }) => ({ ...state, playerName }))
);
