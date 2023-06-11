import styled from '@emotion/styled';
import { useMemo } from 'react';
import Box from './Box';
import { BoxColors } from '@/store/gameReducer';

const BOARD_SIZE = 360;
const MARGIN_SIZE = 6.4;

interface BoardProps {
  stage: number;
  color: BoxColors;
  onAnswerBoxClick: () => void;
  onWrongBoxClick: () => void;
}

const Board = ({
  stage,
  color,
  onAnswerBoxClick,
  onWrongBoxClick,
}: BoardProps) => {
  const boxCount = useMemo(
    () => Math.pow(Math.floor((stage + 1) / 2 + 1), 2),
    [stage]
  );

  const row = useMemo(() => Math.floor(Math.sqrt(boxCount)), [stage]);

  const board = useMemo(
    () => Array.from({ length: row }, () => Array(row).fill(0)),
    [stage]
  );

  const answerBoxIndex = useMemo(
    () => ({
      x: Math.floor(Math.random() * row),
      y: Math.floor(Math.random() * row),
    }),
    [stage]
  );

  const boxSize = useMemo(() => `${BOARD_SIZE / row - MARGIN_SIZE}px`, [stage]);

  return (
    <div>
      {board.map((cards, i) => (
        <BoxList key={i} style={{ display: 'flex' }}>
          {cards.map((_, j) =>
            i === answerBoxIndex.x && j === answerBoxIndex.y ? (
              <Box
                key={j}
                color={color.answerColor}
                onBoxClick={onAnswerBoxClick}
                size={boxSize}
              />
            ) : (
              <Box
                key={j}
                color={color.wrongColor}
                onBoxClick={onWrongBoxClick}
                size={boxSize}
              />
            )
          )}
        </BoxList>
      ))}
    </div>
  );
};

export default Board;

const BoxList = styled.div`
  display: flex;
`;
