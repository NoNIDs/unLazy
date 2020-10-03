export const calcLevel = (points) => {
  let level = Math.trunc(points / 100);
  if (level) return level + 1;
  else return 1;
};
