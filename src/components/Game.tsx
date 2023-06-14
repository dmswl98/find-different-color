import styled from '@emotion/styled';
import Board from './Board';
import GameInfo from './GameInfo';
import useGame from '@/hooks/useGame';
import { GAME_STATUS } from '@/store/gameReducer';

const Game = () => {
  const {
    game,
    handleAnswerBoxClick,
    handleWrongBoxClick,
    handleGameStart,
    handleGameReset,
  } = useGame();

  const handleGametShare = async () => {
    await navigator.clipboard.writeText(window.location.href);

    alert('친구들에게 공유해주세요!');
  };

  return (
    <Wrapper>
      <Title>다른색깔 찾기 게임</Title>

      {game.status === GAME_STATUS.READY ? (
        <>
          <Detail>🖱️ 색깔이 다른 사각형을 클릭하세요!</Detail>
          <Button onClick={handleGameStart}>게임 시작</Button>
          <Button onClick={handleGametShare}>공유하기</Button>
        </>
      ) : (
        <>
          <GameInfo info={game} />
          <Board
            stage={game.stage}
            color={game.color}
            onAnswerBoxClick={handleAnswerBoxClick}
            onWrongBoxClick={handleWrongBoxClick}
          />
        </>
      )}
      {game.status === GAME_STATUS.LOSE && (
        <Button onClick={handleGameReset}>🔃 다시 시작</Button>
      )}
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
  color: #ffffff;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Detail = styled.p`
  padding: 2rem;
  background-color: #3d58f130;
  border-radius: 0.4rem;
  margin: 1rem;
`;

const Button = styled.button`
  margin: 0.8rem 0;
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
