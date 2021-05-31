import { regExp } from './base-validation';

export function isValidFirstname(firstname: string): boolean {
  if (regExp.test(firstname)) {
    return true;
  }
  return false;
}
