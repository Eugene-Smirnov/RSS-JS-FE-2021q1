export function mixArray<T>(arr: T[]): T[] {
  const newArr: T[] = [...arr];
  const mixedArr = newArr.sort(() => {
    return Math.random() - 0.5;
  });
  return mixedArr;
}

export function sumNumbers(...nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i += 1) {
    result += nums[i];
  }
  return result;
}
