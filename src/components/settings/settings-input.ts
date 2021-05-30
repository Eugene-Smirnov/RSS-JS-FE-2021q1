export class SettingsInput {
  readonly element: HTMLSelectElement;

  constructor() {
    this.element = document.createElement('select');
    this.element.classList.add('settings__input');
  }
}
