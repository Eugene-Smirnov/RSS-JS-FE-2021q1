import { Car } from '../../models/car';
import { BaseComponent } from '../base-component';
import * as garageService from '../../services/garage/garage-service';
import * as engineService from '../../services/engine/engine-service';
import { currentCarObservable } from '../../services/garage/current-car-observable';
import { animation } from '../../shared';

export class GarageRow extends BaseComponent {
  car: Car;

  carStatus: 'started' | 'stopped' | 'drive' = 'stopped';

  engineButtons?: HTMLButtonElement[];

  animationTime = 0;

  animationId?: { id?:number };

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
        <span class='car__button car__button_start'>A</span>
        <span class='car__button car__button_stop car__button_active'>B</span>
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
      });
    }
  }

  handleStartButton(): void {
    const btn = this.element.querySelector('.car__button_start');
    if (btn) {
      btn.addEventListener('click', async () => {
        this.switchActiveEngineButtons();
        await this.startEngine().catch(() => this.switchActiveEngineButtons());
        await this.drive().catch(() => this.switchActiveEngineButtons());
      });
    }
  }

  handleStopButton(): void {
    const btn = this.element.querySelector('.car__button_stop');
    if (btn) {
      btn.addEventListener('click', async () => {
        this.switchActiveEngineButtons();
        await this.stopEngine().catch(() => this.switchActiveEngineButtons());
      });
    }
  }

  switchActiveEngineButtons(): void {
    if (this.engineButtons) {
      this.engineButtons.forEach((btn) => {
        btn.classList.toggle('car__button_active');
      });
    }
  }

  async startEngine(): Promise<void> {
    if (this.car.id) {
      this.carStatus = 'started';
      await engineService
        .start(this.car.id, this.carStatus)
        .then((engineResponce) => {
          if (engineResponce) {
            this.animationTime = engineResponce.distance / engineResponce.velocity;
            console.log(this.animationTime);
            this.animationId = animation(this.element, this.animationTime);
          }
        });
    }
  }

  async stopEngine(): Promise<void> {
    if (this.car.id) {
      this.carStatus = 'stopped';
      await engineService
        .stop(this.car.id, this.carStatus)
        .then((engineResponce) => {
          if (engineResponce) {
            console.log(engineResponce);

            // stop animation, return car to start position
          }
        });
    }
  }

  async drive(): Promise<void> {
    if (this.car.id) {
      this.carStatus = 'drive';
      await engineService
        .drive(this.car.id, this.carStatus)
        .catch(() => {
          if (this.animationId) {
            if (this.animationId.id) window.cancelAnimationFrame(this.animationId.id);
          }
        })
        .then((success) => {
          if (success) console.log('Car has arrived without excesses');
        });
    }
  }
}
