import { useEffect, useRef } from 'react';
import { ACTIONS, GAME_STATUS, useGameReducer } from '@/store/gameReducer';

const useGame = () => {
  const [game, dispatch] = useGameReducer();
  const timerId = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (game.status !== GAME_STATUS.RUN) {
      return;
    }

    if (game.timer <= 0) {
      dispatch({ type: ACTIONS.STOP_GAME });
      timerId.current && clearInterval(timerId.current);

      return;
    }

    timerId.current = setInterval(() => {
      dispatch({ type: ACTIONS.RUN_TIMER });
    }, 1000);

    return () => {
      timerId.current && clearInterval(timerId.current);
    };
  }, [game.timer, game.stage, game.status]);

  const handleAnswerBoxClick = () => {
    dispatch({ type: ACTIONS.CLICK_ANSWER_BOX });
  };

  const handleWrongBoxClick = () => {
    dispatch({ type: ACTIONS.CLICK_WRONG_BOX });
  };

  const handleGameStart = () => {
    dispatch({ type: ACTIONS.START_GAME });
  };

  const handleGameReset = () => {
    dispatch({ type: ACTIONS.RESET_GAME });
  };

  return {
    game,
    handleAnswerBoxClick,
    handleWrongBoxClick,
    handleGameStart,
    handleGameReset,
  };
};

export default useGame;
