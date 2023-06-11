import { CSSProperties, useReducer } from 'react';
import { getColors } from '@/utils/color';

const INIT_ISPLAY = true;
const INIT_STAGE = 1;
const INIT_TIMER = 15;
const INIT_SCORE = 0;

export interface BoxColors {
  wrongColor: CSSProperties['color'];
  answerColor: CSSProperties['color'];
}

export interface GameState {
  isPlay: boolean;
  stage: number;
  timer: number;
  score: number;
  color: BoxColors;
}

export const initialGame = {
  isPlay: INIT_ISPLAY,
  stage: INIT_STAGE,
  timer: INIT_TIMER,
  score: INIT_SCORE,
  color: {
    ...getColors(INIT_STAGE),
  },
};

export const ACTIONS = {
  RUN_TIMER: 'RUN_TIMER',
  CLICK_WRONG_BOX: 'CLICK_WRONG_BOX',
  CLICK_ANSWER_BOX: 'CLICK_ANSWER_BOX',
  RESET_GAME: 'RESET_GAME',
  LOSE: 'LOSE',
} as const;

type GameActions = { type: keyof typeof ACTIONS };

export const gameReducer = (state: GameState, action: GameActions) => {
  switch (action.type) {
    case ACTIONS.RUN_TIMER: {
      return {
        ...state,
        timer: state.timer - 1 < 0 ? 0 : state.timer - 1,
      };
    }
    case ACTIONS.CLICK_WRONG_BOX: {
      if (!state.isPlay) {
        return state;
      }

      return {
        ...state,
        timer: state.timer - 3 < 0 ? 0 : state.timer - 3,
      };
    }
    case ACTIONS.CLICK_ANSWER_BOX: {
      if (!state.isPlay) {
        return state;
      }

      return {
        ...state,
        stage: state.stage + 1,
        timer: INIT_TIMER,
        score: state.score + state.stage * state.stage * state.timer,
        color: {
          ...getColors(state.stage + 1),
        },
      };
    }
    case ACTIONS.LOSE: {
      return {
        ...state,
        isPlay: false,
      };
    }
    case ACTIONS.RESET_GAME: {
      return { ...initialGame };
    }
  }
};

export const useGameReducer = () => useReducer(gameReducer, initialGame);
