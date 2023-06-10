import Board from './components/Board';
import useGame from './hooks/useGame';

function App() {
  const { game, handleAnswerClick, handleWrongClick, handleGameReset } =
    useGame();

  return (
    <div>
      <Board
        stage={game.stage}
        color={game.color}
        onClickAnswer={handleAnswerClick}
        onClickWrong={handleWrongClick}
      />
      <div>{game.timer}</div>
      <div>{game.score}</div>
      {!game.isPlay && <button onClick={handleGameReset}>다시 시작</button>}
    </div>
  );
}

export default App;
