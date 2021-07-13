export class BaseError extends Error {
  constructor(public message: string = 'Internal Server Error', public code: number = 500) {
    super(message);
  }
}
