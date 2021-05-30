import './header.scss';
import { BaseComponent } from '../base-component';
import { router } from '../../router';
import { HeaderLogo } from './logo';
import { HeaderNav } from './nav/nav';
import { HeaderButton } from './button';
import { RegisterPopUp } from '../register-pop-up';
import { registrationEvent } from '../register-pop-up/registrationevent';

export class Header extends BaseComponent {
  private readonly logo = new HeaderLogo();

  private readonly nav = new HeaderNav();

  private button = new HeaderButton();

  registerPopUp = new RegisterPopUp();

  constructor() {
    super('header', ['header']);
    this.element.append(this.logo.element);
    this.element.append(this.nav.element);
    this.element.append(this.button.element);

    this.handleNavigation();
    this.handleRegistrationButton();
  }

  public selectActiveNavElement(state: string): void {
    const navLinks = Array.from(this.element.querySelectorAll('.nav__link'));
    navLinks.forEach((elem) => elem.classList.remove('nav__link_active'));

    function isCurrentState(link: Element): boolean {
      return link.getAttribute('data-route') === state;
    }
    const currentElement = navLinks.find((link) => isCurrentState(link));

    if (currentElement) {
      currentElement.classList.add('nav__link_active');
    }
  }

  private handleNavigation(): void {
    this.nav.element.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const currentElement = target.closest('.nav__link');
      if (currentElement) {
        const selectedRoute = currentElement.getAttribute('data-route') || '';
        router.navigate(selectedRoute);
      }
    });
  }

  private handleRegistrationButton(): void {
    this.button.element.addEventListener('click', () => {
      this.registerPopUp = new RegisterPopUp();
      this.registerPopUp.element.addEventListener('successRegistration', () => {
        this.buttonExchange();
      });

      const rootElement = document.getElementById('app');
      if (rootElement) rootElement.append(this.registerPopUp.element);

      document.body.classList.add('no-scroll');
      this.registerPopUp.element.style.setProperty('display', 'flex');
      setTimeout(() => {
        this.registerPopUp.element.style.setProperty(
          '--registration-popup-opacity',
          '1',
        );
      }, 0);
    });
  }

  private buttonExchange(): void {
    this.button = new HeaderButton();
    this.button.element.innerText = 'Start Game';
    this.handleStartGameButton();
  }

  private handleStartGameButton(): void {
    this.button.element.addEventListener('click', () => {
      router.navigate('/');
    });
  }
}
