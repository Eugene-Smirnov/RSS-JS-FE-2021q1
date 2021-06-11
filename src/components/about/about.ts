import { BaseComponent } from '../base-component';
import './about.scss';

export class About extends BaseComponent {
  constructor() {
    super('div', ['about__wrapper']);
    const about = new BaseComponent('div', ['about']).element;
    const heading = new BaseComponent('h2', ['about__heading']).element;
    heading.innerText = 'about';
    const content = new BaseComponent('p', ['about__content']).element;
    content.innerHTML = `
      <div class='about__text'>
        <h3>Welcome to async-race app.</h3>
        <p>This app is implementation of task
        <a href='https://github.com/rolling-scopes-school/tasks/blob/master/tasks/async-race.md'>async-race</a>
        of the <a href='https://rs.school/'>RSS JS/FE 2021q1</a> course</p>
        <p>To start work with it, you need to upload and launch <a href='https://github.com/mikhama/async-race-api'>server</a></p>
        <h4 class='about__ul-heading'>in "Garage" you can:</h4>
        <ul>
          <li>CRUD cars with two forms</li>
          <li>generate 100 random cars via "generate" button</li>
          <li>start and stop each car's engine</li>
          <li>arrange a race via "race" button</li>
          <li>race winners upload to scoreboard on "winners" page</li>
          <li>paginate between cars</li>
        </ul>
        <h4 class='about__ul-heading'>in "Winners" you can:</h4>
        <ul>
          <li>see winners</li>
          <li>paginate between pages (if winners number > 10, that limit for page)</li>
          <li>sort scoreboard by wins, or by time (second click on category changes order (ascendens / descendens))</li>
        </ul>
      </div>
    `;
    about.append(heading, content);
    this.element.append(about);
  }
}
