import { useEffect, useRef } from 'react';
import { ACTIONS, useGameReducer } from '@/store/gameReducer';

const useGame = () => {
  const [game, dispatch] = useGameReducer();
  const timerId = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (game.timer <= 0) {
      dispatch({ type: ACTIONS.LOSE });
      timerId.current && clearInterval(timerId.current);

      return;
    }

    timerId.current = setInterval(() => {
      dispatch({ type: ACTIONS.RUN_TIMER });
    }, 1000);

    return () => {
      timerId.current && clearInterval(timerId.current);
    };
  }, [game.timer, game.stage]);

  const handleAnswerClick = () => {
    dispatch({ type: ACTIONS.CLICK_ANSWER_BOX });
  };

  const handleWrongClick = () => {
    dispatch({ type: ACTIONS.CLICK_WRONG_BOX });
  };

  const handleGameReset = () => {
    dispatch({ type: ACTIONS.RESET_GAME });
  };

  return { game, handleAnswerClick, handleWrongClick, handleGameReset };
};

export default useGame;
