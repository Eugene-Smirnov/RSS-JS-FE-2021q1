export class Winner {
  id: number;

  wins: number;

  time: number;

  constructor(wins: number, time: number, id: number) {
    this.wins = wins;
    this.time = time;
    this.id = id;
  }
}
