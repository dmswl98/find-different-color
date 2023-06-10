import useGame from '@/hooks/useGame';
import Board from './Board';

const Game = () => {
  const { game, handleAnswerBoxClick, handleWrongBoxClick, handleGameReset } =
    useGame();

  return (
    <div>
      <div>다른색깔 찾기 게임</div>
      <Board
        stage={game.stage}
        color={game.color}
        onAnswerBoxClick={handleAnswerBoxClick}
        onWrongBoxClick={handleWrongBoxClick}
      />
      <div>{game.timer}</div>
      <div>{game.score}</div>
      {!game.isPlay && <button onClick={handleGameReset}>다시 시작</button>}
    </div>
  );
};

export default Game;
