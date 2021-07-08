export function mixArray<T>(arr: T[]): T[] {
  const newArr: T[] = [...arr];
  const mixedArr = newArr.sort(() => {
    return Math.random() - 0.5;
  });
  return mixedArr;
}
