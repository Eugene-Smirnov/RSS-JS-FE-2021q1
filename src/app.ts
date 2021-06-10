import { router } from './router';
import { Header } from './components/header/header';
import { AboutUI } from './components/about/about';
import { Garage } from './components/garage/garage';
import { Winners } from './components/winners/winners';

export class App {
  private readonly pageOutlet: HTMLDivElement;

  routerConfig: Map<string, () => HTMLElement> = new Map([
    ['/', () => this.winners.element],
    ['/garage', () => this.garage.element],
    ['/winners', () => this.winners.element]
  ]);

  private about = new AboutUI();

  private garage = new Garage();

  private winners = new Winners();

  constructor(private readonly rootElement: HTMLElement) {
    const header = new Header();
    this.pageOutlet = document.createElement('div');
    this.rootElement.appendChild(header.element);
    this.rootElement.appendChild(this.pageOutlet);
  }

  start(): void {
    router.subscribe((path) => {
      const componentFactory = this.routerConfig.get(path);
      if (componentFactory) {
        const component = componentFactory();
        this.pageOutlet.innerHTML = '';
        this.pageOutlet.append(component);
      }
    });
  }
}
