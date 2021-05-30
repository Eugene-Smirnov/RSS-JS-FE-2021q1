import { User } from '../../models/user';

export class UserRepository {
  private readonly dbName = 'Eugene-Smirnov';

  private readonly storeName = 'users';

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

  create(user: User): Promise<User> {
    return new Promise((res, rej) => {
      const transaction = this.db?.transaction(this.storeName, 'readwrite');
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

  updateUserScore(user: User): void {
    const transaction = this.db?.transaction(this.storeName, 'readwrite');
    const users = transaction?.objectStore(this.storeName);
    if (users) {
      users.put(user);
    }
  }
}
