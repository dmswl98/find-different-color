import useGame from '@/hooks/useGame';
import Board from './Board';
import styled from '@emotion/styled';
import GameInfo from './GameInfo';

const Game = () => {
  const { game, handleAnswerBoxClick, handleWrongBoxClick, handleGameReset } =
    useGame();

  return (
    <Wrapper>
      <Title>다른색깔 찾기 게임</Title>
      <GameInfo info={game} />
      <Board
        stage={game.stage}
        color={game.color}
        onAnswerBoxClick={handleAnswerBoxClick}
        onWrongBoxClick={handleWrongBoxClick}
      />
      {!game.isPlay && <Button onClick={handleGameReset}>🔃 다시 시작</Button>}
    </Wrapper>
  );
};

export default Game;

const Wrapper = styled.div`
  margin-top: 3.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  margin: 1rem 0;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #3d58f1;
  border-radius: 0.4rem;
  opacity: 0.8;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
