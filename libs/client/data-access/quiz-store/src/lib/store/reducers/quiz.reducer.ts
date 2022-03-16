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
  selectedOption: QuizItem | null;
}

export const initialState: State = {
  playerName: '',
  score: 0,
  currentLevel: 0,
  levelIsCompleted: false,
  data: [],
  currentQuestion: null,
  selectedOptions: [],
  selectedOption: null,
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
    return {
      ...state,
      currentLevel: state.currentLevel + 1,
      selectedOptions: [],
      selectedOption: null,
    };
  }),

  on(quizActions.nextLevelSuccess, (state) => {
    const currentSection = state.data[state.currentLevel];
    const randomIndex = generateRandomNum(state.data.length - 1);
    const currentQuestion = currentSection.data[randomIndex];
    return { ...state, currentQuestion, levelIsCompleted: false };
  }),

  on(quizActions.setOption, (state, { selectedOption }) => {
    const currentQuestionId = state.currentQuestion?.id || '';
    const levelIsCompleted =
      selectedOption.id === currentQuestionId || state.levelIsCompleted;
    const selectedOptions = state.selectedOptions.includes(currentQuestionId)
      ? [...state.selectedOptions]
      : [...state.selectedOptions, selectedOption.id];

    return {
      ...state,
      selectedOptions,
      levelIsCompleted,
      selectedOption,
    };
  }),

  // on(quizActions.gameOver, (state) => {
  //   const currentSection = state.data[0];
  //   const randomIndex = generateRandomNum(state.data.length - 1);
  //   const currentQuestion = currentSection.data[randomIndex];
  //   return { ...state, currentLevel: 0, selectedOptions: [], currentQuestion, levelIsCompleted: false };
  // })

  on(quizActions.gameOver, (state) => {
    return { ...state, currentQuestion: null };
  })
);
