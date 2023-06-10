import { useMemo } from 'react';
import Box from './Box';
import { Colors } from '@/store/gameReducer';

interface BoardProps {
  stage: number;
  color: Colors;
  onClickAnswer: () => void;
  onClickWrong: () => void;
}

const Board = ({ stage, color, onClickAnswer, onClickWrong }: BoardProps) => {
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
                onClickBox={onClickAnswer}
                size={boxSize}
              />
            ) : (
              <Box
                key={j}
                color={color.normalColor}
                onClickBox={onClickWrong}
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
