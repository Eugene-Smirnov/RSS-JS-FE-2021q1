import { About } from './components/about/about';
import { Game } from './components/game/game';
import { Header } from './components/header/header';
import { router } from './router';

const routerConfig: Map<string, () => HTMLElement> = new Map([
  ['/', () => new Game().element],
  ['/about', () => new About().element],
  [
    '/score',
    () => {
      const scorePage = document.createElement('h1');
      scorePage.innerText = 'Score Page';
      return scorePage;
    },
  ],
  [
    '/settings',
    () => {
      const settingsPage = document.createElement('h1');
      settingsPage.innerText = 'Settings Page';
      return settingsPage;
    },
  ],
]);

export class App {
  private header: Header;

  private readonly pageOutlet: HTMLDivElement;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.pageOutlet = document.createElement('div');
    this.pageOutlet.classList.add('page-outlet');
    this.rootElement.append(this.header.element);
    this.rootElement.append(this.pageOutlet);
  }

  start(): void {
    router.subscribe((path) => {
      const componentFactory = routerConfig.get(path);
      if (componentFactory) {
        const component = componentFactory();
        this.pageOutlet.innerHTML = '';
        this.pageOutlet.append(component);
      }
    });
  }
}
