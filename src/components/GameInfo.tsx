import styled from '@emotion/styled';
import { GameState } from '@/store/gameReducer';

interface GameInfoProps {
  info: GameState;
}

const GameInfo = ({ info }: GameInfoProps) => {
  return (
    <InfoList>
      <InfoItem>
        <Title>🕹️ 스테이지</Title>
        <Detail>{info.stage}</Detail>
      </InfoItem>
      <InfoItem>
        <Title>⏰ 남은 시간</Title>
        <Detail>{info.timer}</Detail>
      </InfoItem>
      <InfoItem>
        <Title>🎉 점수</Title>
        <Detail>{info.score}</Detail>
      </InfoItem>
    </InfoList>
  );
};

export default GameInfo;

const InfoList = styled.ul`
  margin-bottom: 1.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const InfoItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 0.4rem;
`;

const Detail = styled.p`
  width: 3rem;
`;
