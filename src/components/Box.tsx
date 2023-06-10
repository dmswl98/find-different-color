import { CSSProperties } from 'react';

interface BoxProps {
  size: CSSProperties['width'];
  color: CSSProperties['color'];
  onClickBox: () => void;
}

const Box = ({ size, color, onClickBox }: BoxProps) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        margin: '0.2rem',
        backgroundColor: color,
      }}
      onClick={onClickBox}
    />
  );
};

export default Box;
