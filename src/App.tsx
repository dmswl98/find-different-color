import Board from './components/Board';
import useGame from './hooks/useGame';

function App() {
  const { game, handleAnswerBoxClick, handleWrongBoxClick, handleGameReset } =
    useGame();

  return (
    <>
      <Board
        stage={game.stage}
        color={game.color}
        onAnswerBoxClick={handleAnswerBoxClick}
        onWrongBoxClick={handleWrongBoxClick}
      />
      <div>{game.timer}</div>
      <div>{game.score}</div>
      {!game.isPlay && <button onClick={handleGameReset}>다시 시작</button>}
    </>
  );
}

export default App;
