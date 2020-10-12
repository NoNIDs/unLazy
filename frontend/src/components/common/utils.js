export const calcLevel = (points) => {
  let level = Math.trunc(points / 100);
  if (level) return level + 1;
  else return 1;
};

export const editDatePubArticle = (date) => {
  let dateTemp = date.match(/\-\w{2}/g);

  dateTemp = dateTemp.map((number) => number.substr(1, 2));

  dateTemp = dateTemp.reverse().join("/");

  return dateTemp;
};
