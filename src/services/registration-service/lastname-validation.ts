import { regExp } from './base-validation';

export function isValidLastname(lastname: string): boolean {
  if (regExp.test(lastname)) {
    return true;
  }
  return false;
}
