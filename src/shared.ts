export function delay(timeout: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(res, timeout);
  });
}

export function generateQueryString(
  queryParams: Record<string, string | number | boolean>
): string {
  let result;
  const arr = Object.entries(queryParams);
  const stringArr = arr.map((item) => `${item[0]}=${item[1]}`);
  result = `?${stringArr.join('&')}`;
  if (!result) result = '';
  return result;
}
