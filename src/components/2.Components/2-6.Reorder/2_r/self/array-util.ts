export const deleteItem = <T>(item: T, arr: T[]) => {
  const index = arr.indexOf(item);

  if (index > -1) arr.splice(index, 1);
};

export const addItem = <T>(initialArr: T[], arr: T[]) => {
  const filteredArr = initialArr.filter((item) => !arr.includes(item));

  arr.push(filteredArr[0]);
};
