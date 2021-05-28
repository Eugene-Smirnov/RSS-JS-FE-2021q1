import './register.scss';
import { BaseComponent } from '../base-component';
import { PopUp } from '../pop-up/pop-up';
import { RegisterButton } from './button';
import { RegisterInput } from './register__input';

export class RegisterPopUp extends PopUp {
  firstNameInput: RegisterInput;

  lastNameInput: RegisterInput;

  emailInput: RegisterInput;

  buttons: BaseComponent;

  addButton: RegisterButton;

  cancelButton: RegisterButton;

  constructor() {
    super();
    this.popUp.element.classList.add('pop-up_register-form');

    const registerHeading = new BaseComponent('h2', ['register__heading']);
    registerHeading.element.innerText = 'Register new Player';
    this.popUp.element.append(registerHeading.element);

    this.firstNameInput = new RegisterInput('firstName');
    this.popUp.element.append(this.firstNameInput.element);

    this.lastNameInput = new RegisterInput('lastName');
    this.popUp.element.append(this.lastNameInput.element);

    this.emailInput = new RegisterInput('email');
    this.popUp.element.append(this.emailInput.element);

    this.buttons = new BaseComponent('div', ['register__buttons']);
    this.addButton = new RegisterButton('addUser');
    this.buttons.element.append(this.addButton.element);
    this.cancelButton = new RegisterButton('cancel');
    this.buttons.element.append(this.cancelButton.element);
    this.popUp.element.append(this.buttons.element);

    this.handleAddButton();
    this.handleCancelButton();
    this.handleHiding();
  }

  private popUpHide(): void {
    this.element.style.setProperty('--registration-popup-opacity', '0');
    setTimeout(() => {
      document.body.classList.remove('no-scroll');
      this.element.style.setProperty('display', 'none');
    }, 300);
  }

  private handleCancelButton(): void {
    this.cancelButton.element.addEventListener('click', () => {
      this.popUpHide();
    });
  }

  private handleAddButton(): void {
    this.addButton.element.addEventListener('click', () => {
      // validation and creating user
      this.popUpHide();
    });
  }

  private handleHiding(): void {
    this.element.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.closest('.pop-up') === null) {
        this.popUpHide();
      }
    });
  }
}
