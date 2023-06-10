import styled from '@emotion/styled';
import { CSSProperties } from 'react';

interface BoxProps {
  size: CSSProperties['width'] | CSSProperties['height'];
  color: CSSProperties['color'];
  onClickBox: () => void;
}

const Box = ({ size, color, onClickBox }: BoxProps) => {
  return <BoxButton size={size} color={color} onClick={onClickBox} />;
};

export default Box;

const BoxButton = styled.button<Pick<BoxProps, 'size' | 'color'>>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: 0.2rem;
  background-color: ${({ color }) => color};
  border-radius: 0.4rem;
`;
