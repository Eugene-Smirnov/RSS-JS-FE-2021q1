import { User } from '../../models/user';

export class UserRepository {
  private readonly dbName = 'match-match';

  private readonly storeName = 'users';

  private loggedUser: User | null = null;

  private db?: IDBDatabase;

  constructor() {
    const openRequest = indexedDB.open(this.dbName);
    openRequest.onsuccess = (event) => {
      this.db = (event.target as any).result;
    };
    openRequest.onupgradeneeded = (event) => {
      const db = (event.target as any).result;
      if (!db.objectStoreNames.contains(this.storeName)) {
        db.createObjectStore(this.storeName, { keyPath: 'id' });
      }
    };
  }

  create(firstName = '', lastName = '', email = ''): Promise<User> {
    return new Promise((res, rej) => {
      const transaction = this.db?.transaction(this.storeName, 'readwrite');
      const user = new User(firstName, lastName, email);
      const users = transaction?.objectStore(this.storeName);
      if (users) {
        users.add(user).onsuccess = () => {
          res(user);
        };
      } else {
        rej();
      }
    });
  }

  /*   GetTopPlayers(): void {
    const transaction = this.db?.transaction(this.storeName, 'readwrite');
    const users = transaction?.objectStore(this.storeName);
    if (users) {
      users.getAll();
    }
  } */

  updateUserScore(score: number): void {
    const transaction = this.db?.transaction(this.storeName, 'readwrite');
    const users = transaction?.objectStore(this.storeName);

    if (this.loggedUser) {
      this.loggedUser.score = score;
    }
    if (users) {
      users.put(this.loggedUser);
    }
  }
}
