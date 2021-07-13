import { BaseError } from './base-error';

export class NotFoundError extends BaseError {
  constructor(public message: string = 'Not Found', public code: number = 404) {
    super(message, code);
  }
}
