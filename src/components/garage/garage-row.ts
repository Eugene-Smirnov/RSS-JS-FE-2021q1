import { Car } from '../../models/car';
import { BaseComponent } from '../base-component';
import * as garageService from '../../services/garage/garage-service';
import * as engineService from '../../services/engine/engine-service';
import { currentCarObservable } from '../../services/garage/current-car-observable';
import { animation } from '../../shared';

export class GarageRow extends BaseComponent {
  car: Car;

  carStatus: 'started' | 'stopped' | 'drive' = 'stopped';

  startBtn: HTMLElement | null = null;

  stopBtn: HTMLElement | null = null;

  engineButtons?: HTMLButtonElement[];

  animationTime = 0;

  animationId?: { id?: number };

  private abortDriveRequest: () => void = () => {};

  constructor(car: Car) {
    super('div', ['garage-row']);
    this.car = car;
    this.element.innerHTML = `
    <h4 class='car__name'>${car.name}</h4>
    <div class='garage-row__buttons'>
      <button class='garage-row__button_select'>select</button>
      <button class='garage-row__button_remove'>remove</button>
    </div>
    <div class='garage-row__track-wrapper'>
      <div class='car__buttons'>
        <button class='car__button car__button_start'>A</button>
        <button class='car__button car__button_stop car__button_active' disabled>B</button>
      </div>
      <div class='garage-row__track'>
        <div class='car__image' style='background-color: ${car.color}'>

        </div>
        <span class='garage-row__finish-line'></span>
      </div>
    </div>
    `;

    this.engineButtons = Array.from(
      this.element.querySelectorAll('.car__button')
    );

    this.handleSelectBtn();
    this.handleRemoveBtn();
    this.handleStartButton();
    this.handleStopButton();
  }

  handleSelectBtn(): void {
    const btn = this.element.querySelector('.garage-row__button_select');
    if (btn) {
      btn.addEventListener('click', () => {
        if (this.car.id) currentCarObservable.update(this.car);
      });
    }
  }

  handleRemoveBtn(): void {
    const btn = this.element.querySelector('.garage-row__button_remove');
    if (btn) {
      btn.addEventListener('click', () => {
        if (this.car.id) garageService.deleteCar(this.car.id);
        this.element.dispatchEvent(
          new Event('garageUpdate', { bubbles: true })
        );
        this.element.dispatchEvent(
          new Event('winnersUpdate', { bubbles: true })
        );
      });
    }
  }

  handleStartButton(): void {
    this.startBtn = this.element.querySelector('.car__button_start');
    if (this.startBtn) {
      this.startBtn.addEventListener('click', async () => {
        await this.startEngine();
        await this.drive();
      });
    }
  }

  handleStopButton(): void {
    this.stopBtn = this.element.querySelector('.car__button_stop');
    if (this.stopBtn) {
      this.stopBtn.addEventListener('click', async () => {
        await this.stopEngine();
      });
    }
  }

  switchActiveEngineButtons(): void {
    if (this.engineButtons) {
      this.engineButtons.forEach((btn) => {
        btn.classList.toggle('car__button_active');
        if (btn.classList.contains('car__button_active')) {
          btn.setAttribute('disabled', '');
        } else {
          btn.removeAttribute('disabled');
        }
      });
    }
  }

  async startEngine(): Promise<void> {
    if (!this.car.id || this.carStatus !== 'stopped') return;

    this.switchActiveEngineButtons();
    this.carStatus = 'started';

    const engineStats = await engineService.start(this.car.id, this.carStatus);
    this.animationTime = Math.round((engineStats.distance / engineStats.velocity) * 10) / 10;
  }

  async stopEngine(): Promise<void> {
    if (this.car.id) {
      if (this.carStatus === 'drive' || this.carStatus === 'started') {
        this.switchActiveEngineButtons();
        this.carStatus = 'stopped';
        this.cancelAnimation();

        this.abortDriveRequest();

        await engineService.stop(this.car.id, this.carStatus).then(() => {
          this.element.style.setProperty('--distance', '0%');
        });
      }
    }
  }

  async drive(): Promise<void> {
    if (!this.car.id || this.carStatus !== 'started') return;

    this.abortDriveRequest();

    this.animationId = animation(this.element, this.animationTime);
    this.carStatus = 'drive';
    const { request, abort } = engineService.drive(this.car.id, this.carStatus);
    this.abortDriveRequest = abort;

    try {
      await request();
      this.dispatchWinnerEvent();
    } catch (e) {
      this.cancelAnimation();
    }
  }

  cancelAnimation(): void {
    if (this.animationId) {
      if (this.animationId.id) window.cancelAnimationFrame(this.animationId.id);
    }
  }

  dispatchWinnerEvent(): void {
    if (this.car.id) {
      this.element.dispatchEvent(
        new CustomEvent('raceWinner', {
          detail: {
            winner: this.car.id
          },
          bubbles: true
        })
      );
    }
  }
}
