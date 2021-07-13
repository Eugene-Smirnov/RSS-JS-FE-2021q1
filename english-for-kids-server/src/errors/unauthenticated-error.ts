import { BaseError } from './base-error';

export class UnauthenticatedError extends BaseError {
  constructor(public message: string = 'Incorrect Login Or Password', public code: number = 401) {
    super(message, code);
  }
}
