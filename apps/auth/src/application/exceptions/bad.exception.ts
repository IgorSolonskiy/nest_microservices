export class BadException extends Error {
  statusCode: number;
  message: string;

  constructor(message) {
    super();
    this.name = 'Bad Request';
    this.statusCode = 400;
    this.message = message;
  }
}
