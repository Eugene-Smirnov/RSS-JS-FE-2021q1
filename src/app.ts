import { router } from './router';
import { Header } from './components/header/header';
import { Garage } from './components/garage/garage';

const routerConfig: Map<string, () => HTMLElement> = new Map([
  ['/', () => new Garage().element],
  [
    '/winners',
    () => {
      const aboutPage = document.createElement('h1');
      aboutPage.innerText = 'Winners';
      return aboutPage;
    },
  ],
]);

export class App {
  private readonly pageOutlet: HTMLDivElement;

  constructor(private readonly rootElement: HTMLElement) {
    const header = new Header();
    this.pageOutlet = document.createElement('div');
    this.rootElement.appendChild(header.element);
    this.rootElement.appendChild(this.pageOutlet);
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
