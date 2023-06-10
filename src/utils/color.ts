const getRandomColor = () => {
  return Math.floor(Math.random() * 256);
};

const getdiffColor = (stage: number, color: number) => {
  const diff = 255 - stage * 10 > 0 ? 255 - stage * 10 : 10;

  return Math.abs(color - diff);
};

export const getColors = (stage: number) => {
  const [r, g, b] = [getRandomColor(), getRandomColor(), getRandomColor()];

  return {
    wrongColor: `rgb(${r},${g},${b})`,
    answerColor: `rgb(${getdiffColor(stage, r)},${getdiffColor(
      stage,
      g
    )},${getdiffColor(stage, b)})`,
  };
};
