import { createReducer, on } from '@ngrx/store';
import { QuizItem, QuizSection } from '@nx/shared/types/api-quiz';
import { generateRandomNum } from '@nx/shared/utils/generate-random-num';

// Actions
import * as apiActions from '../actions/api-quiz.actions';
import * as quizActions from '../actions/quiz.actions';

export const quizGameFeatureKey = 'gameQuizState';

export interface State {
  playerName: string;
  score: number;
  currentLevel: number;
  levelIsCompleted: boolean;
  data: QuizSection[];
  currentQuestion: QuizItem | null;
  selectedOptions: string[];
}

export const initialState: State = {
  playerName: '',
  score: 0,
  currentLevel: 0,
  levelIsCompleted: false,
  data: [],
  currentQuestion: null,
  selectedOptions: [],
};

export const reducer = createReducer(
  initialState,

  on(apiActions.loadQuizDataSuccess, (state, { data }) => {
    return { ...state, data };
  }),

  on(quizActions.setPlayerName, (state, { playerName }) => ({ ...state, playerName })),

  on(quizActions.nextLevel, (state) => {
    if (state.currentLevel > state.data.length - 1) {
      return { ...state };
    }
    return { ...state, currentLevel: state.currentLevel + 1, selectedOptions: [] };
  }),

  on(quizActions.nextLevelSuccess, (state) => {
    const currentSection = state.data[state.currentLevel];
    const randomIndex = generateRandomNum(state.data.length - 1);
    const currentQuestion = currentSection.data[randomIndex];
    return { ...state, currentQuestion, isCompleted: false };
  }),

  on(quizActions.setOption, (state, { selectedOption }) => {
    const currentQuestionId = state.currentQuestion?.id;

    // Don't allow to select more if user selected right answer
    if (currentQuestionId && state.selectedOptions.includes(currentQuestionId)) {
      return {
        ...state,
        levelIsCompleted: true,
      };
    }
    return {
      ...state,
      selectedOptions: [...state.selectedOptions, selectedOption],
    };
  }),

  on(quizActions.gameOver, (state) => {
    return { ...state, currentQuestion: null };
  })
);
