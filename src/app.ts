import { About } from './components/about/about';
import { Game } from './components/game/game';
import { Header } from './components/header/header';
import { Score } from './components/score/score';
import { Settings } from './components/settings/settings';
import { router } from './router';

const routerConfig: Map<string, () => HTMLElement> = new Map([
  ['/', () => new Game().element],
  ['/about', () => new About().element],
  ['/score', () => new Score().element],
  ['/settings', () => new Settings().element],
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
    router.subscribe((path) => this.header.selectActiveNavElement(path));
    router.navigate('/about');
  }
}
