import { useMemo } from 'react';
import Box from './Box';
import { BoxColors } from '@/store/gameReducer';

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

  const boxSize = useMemo(() => `${700 / row}px`, [stage]);

  return (
    <div>
      {board.map((cards, i) => (
        <div key={i} style={{ display: 'flex' }}>
          {cards.map((_, j) =>
            i === answerBoxIndex.x && j === answerBoxIndex.y ? (
              <Box
                key={j}
                color={color.answerColor}
                onClickBox={onAnswerBoxClick}
                size={boxSize}
              />
            ) : (
              <Box
                key={j}
                color={color.wrongColor}
                onClickBox={onWrongBoxClick}
                size={boxSize}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Board;
