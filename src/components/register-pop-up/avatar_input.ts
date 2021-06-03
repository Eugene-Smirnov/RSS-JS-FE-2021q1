import { fileTypeValidation } from '../../services/registration-service/file-input-validation';
import './avatar-input.scss';

export class AvatarInput {
  readonly element: HTMLElement;

  private input: HTMLInputElement;

  private image: HTMLImageElement;

  private data: string | ArrayBuffer = '';

  constructor() {
    this.element = document.createElement('label');
    this.element.classList.add('avatar-input__wrapper');
    this.element.setAttribute('for', 'avatar-input');

    this.input = document.createElement('input');
    this.input.classList.add('avatar-input');
    this.input.setAttribute('id', 'avatar-input');
    this.input.setAttribute('name', 'upload');
    this.input.setAttribute('type', 'file');
    this.input.setAttribute('placeholder', 'Load avatar');
    this.element.append(this.input);

    this.image = new Image();
    this.image.classList.add('register-avatar-image');
    this.image.setAttribute('crossOrigin', 'anonymous');
    this.image.src = './default-avatar.png';
    this.element.append(this.image);

    this.handleInput();
  }

  private handleInput() {
    this.input.addEventListener('change', () => {
      if (!this.input.files) return;
      const fileType = this.input.files[0].type;
      if (!fileTypeValidation(fileType)) return;
      const file = this.input.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.data = reader.result || '';
        this.image.src = this.data.toString();
      };
    });
  }

  public getAvatarData(): string {
    return this.data.toString();
  }
}
