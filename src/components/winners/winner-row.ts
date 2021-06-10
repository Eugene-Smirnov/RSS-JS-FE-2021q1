import { Winner } from '../../models/winner';
import { BaseComponent } from '../base-component';
import * as garageService from '../../services/garage/garage-service';

export class WinnersRow extends BaseComponent {
  winner: Winner;

  color = '#FFFFFF';

  carName = '';

  constructor(winner: Winner, index: number) {
    super('div', ['winners-row']);
    this.winner = winner;
    if (this.winner.id) {
      garageService.getCar(this.winner.id).then((car) => {
        this.color = car.color;
        this.carName = car.name;

        const ind = new BaseComponent('div', ['winners-row__index']).element;
        ind.innerText = `${index}`;

        const img = new BaseComponent('div', ['winners-row__image']).element;
        img.innerHTML = `
          <div class='winners-row__car' style='background-color: ${this.color}'>
        `;

        const name = new BaseComponent('div', ['winners-row__name']).element;
        name.innerText = this.carName;

        const wins = new BaseComponent('div', ['winners-row__wins']).element;
        wins.innerText = `${this.winner.wins}`;

        const time = new BaseComponent('div', ['winners-row__time']).element;
        time.innerText = `${this.winner.time}`;

        this.element.append(ind, img, name, wins, time);
      });
    }
  }
}
