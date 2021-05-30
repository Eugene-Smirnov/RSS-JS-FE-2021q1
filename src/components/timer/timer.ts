import './timer.scss';

import { BaseComponent } from '../base-component';

function toTwoSym(num: number): string {
  if (num < 10) return `0${num}`;
  return `${num}`;
}

export class Timer extends BaseComponent {
  constructor() {
    super('div', ['timer']);
  }

  setTime(num: number): void {
    const minutes = toTwoSym(Math.floor(num / 60));
    const seconds = toTwoSym(num % 60);
    this.element.innerText = `${minutes}:${seconds}`;
  }
}
