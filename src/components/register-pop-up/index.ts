import './register.scss';
import { BaseComponent } from '../base-component';
import { PopUp } from '../pop-up/pop-up';
import { RegisterButton } from './button';
import { RegisterInput } from './register__input';
import { AvatarInput } from './avatar_input';
import { isValidFirstname } from '../../services/registration-service/firstname-validation';
import { isValidLastname } from '../../services/registration-service/lastname-validation';
import { isValidEmail } from '../../services/registration-service/email-validation';
import { userService } from '../../services/user-service';
import { registrationEvent } from './registrationevent';

export class RegisterPopUp extends PopUp {
  firstNameInput = new RegisterInput('firstName');

  lastNameInput = new RegisterInput('lastName');

  emailInput = new RegisterInput('email');

  avatarInput = new AvatarInput();

  addButton: RegisterButton;

  cancelButton: RegisterButton;

  constructor() {
    super();
    this.popUp.element.classList.add('pop-up_register-form');

    const registerHeading = new BaseComponent('h2', ['register__heading']);
    registerHeading.element.innerText = 'Register new Player';
    this.popUp.element.append(registerHeading.element);

    const inputsWrapper = new BaseComponent('div', [
      'register__inputs-wrapper',
    ]);
    const textInputsWrapper = new BaseComponent('div', [
      'register__text-inputs-wrapper',
    ]);

    this.firstNameInput.element.addEventListener('input', () => {
      const firstName = this.firstNameInput.element.value;
      this.firstNameInput.validation(isValidFirstname(firstName));
    });
    textInputsWrapper.element.append(this.firstNameInput.element);

    this.lastNameInput.element.addEventListener('input', () => {
      const lastName = this.lastNameInput.element.value;
      this.lastNameInput.validation(isValidLastname(lastName));
    });
    textInputsWrapper.element.append(this.lastNameInput.element);

    this.emailInput.element.addEventListener('input', () => {
      const email = this.emailInput.element.value;
      this.emailInput.validation(isValidEmail(email));
    });
    textInputsWrapper.element.append(this.emailInput.element);

    inputsWrapper.element.append(textInputsWrapper.element);
    inputsWrapper.element.append(this.avatarInput.element);
    this.popUp.element.append(inputsWrapper.element);

    const buttons = new BaseComponent('div', ['register__buttons']);
    this.addButton = new RegisterButton('addUser');
    buttons.element.append(this.addButton.element);
    this.cancelButton = new RegisterButton('cancel');
    buttons.element.append(this.cancelButton.element);
    this.popUp.element.append(buttons.element);

    this.handleAddButton();
    this.handleCancelButton();
    this.handleHiding();
  }

  private popUpHide(): void {
    this.element.style.setProperty('--popup-opacity', '0');
    setTimeout(() => {
      document.body.classList.remove('no-scroll');
      this.element.remove();
    }, 300);
  }

  private handleCancelButton(): void {
    this.cancelButton.element.addEventListener('click', () => {
      this.popUpHide();
    });
  }

  private handleAddButton(): void {
    this.addButton.element.addEventListener('mousedown', () => {
      const isFNValid = this.firstNameInput.isValid;
      const isLNValid = this.lastNameInput.isValid;
      const isEMValid = this.emailInput.isValid;
      if (isFNValid && isLNValid && isEMValid) {
        const firstName = this.firstNameInput.element.value;
        const lastName = this.lastNameInput.element.value;
        const email = this.emailInput.element.value;
        const avatarData = this.avatarInput.getAvatarData();
        userService.createUser(firstName, lastName, email, avatarData);
        this.element.dispatchEvent(registrationEvent);
        this.popUpHide();
      } else {
        this.addButton.element.classList.add('register-button_denied');
        setTimeout(() => {
          this.addButton.element.classList.remove('register-button_denied');
        }, 750);
      }
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
