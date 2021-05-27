export class User {
  public firstName: string;

  public lastName: string;

  public email: string;

  public score: number;

  readonly id: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.score = 0;
    this.id = this.firstName + this.lastName + new Date();
  }
}
