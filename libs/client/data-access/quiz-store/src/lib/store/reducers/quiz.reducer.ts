import { createReducer, on } from '@ngrx/store';
import { QuizItem, QuizSection } from '@nx/shared/types/api-quiz';
import { generateRandomNum } from '@nx/shared/utils/generate-random-num';
import { loadQuizDataSuccess, setPlayerName } from '../actions';

export const quizGameFeatureKey = 'gameQuizState';

export interface State {
  playerName: string;
  score: number;
  currentLevel: number;
  isCompleted: boolean;
  data: QuizSection[];
  currentQuestion?: QuizItem;
}

export const initialState: State = {
  playerName: '',
  score: 0,
  currentLevel: 0,
  isCompleted: false,
  data: []
};

export const reducer = createReducer(
  initialState,
  on(loadQuizDataSuccess, (state, { data }) => {
    const currentSection = data[state.currentLevel]
    const randomIndex = generateRandomNum(data.length)
    const currentQuestion = currentSection.data[randomIndex]

    return { ...state, data, currentQuestion }
  }),
  on(setPlayerName, (state, { playerName }) => ({ ...state, playerName }))
);
