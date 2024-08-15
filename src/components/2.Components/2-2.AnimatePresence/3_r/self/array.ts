export const deleteItem = <T>({ arr, item }: { arr: T[]; item: T }) => {
  const index = arr.indexOf(item);
  if (index > -1) arr.splice(index, 1);
};
