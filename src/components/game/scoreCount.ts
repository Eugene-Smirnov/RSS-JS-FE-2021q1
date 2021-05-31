export function scoreCount(
  sumCheck: number,
  wrongCheck: number,
  endTime: Date,
  startTime: Date,
): number {
  const endSec = endTime.getSeconds();
  const startSec = startTime.getSeconds();
  let result = (sumCheck - wrongCheck) * 100 - (endSec - startSec) * 10;
  if (result < 0) result = 0;
  return result;
}
