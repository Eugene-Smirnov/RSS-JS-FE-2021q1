export function fileTypeValidation(type: string): boolean {
  if (type === 'image/jpeg') return true;
  if (type === 'image/png') return true;
  if (type === 'image/gif') return true;
  return false;
}
