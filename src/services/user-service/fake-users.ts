import { User } from '../../models/user';

const fakeUser1 = new User('Yauheni', 'Smirnou', 'YauSmirn@yuppie.com');
fakeUser1.score = 1000;
const fakeUser2 = new User('Yakau', 'Hrigorieu', 'YariGg@piecherry.com');
fakeUser2.score = 500;
const fakeUser3 = new User('Martin', 'Cat', 'MartinCat@meow.pour');
fakeUser3.score = 300;

export { fakeUser1, fakeUser2, fakeUser3 };
