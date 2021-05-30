import { User } from '../../models/user';

export class UserRepository {
  private readonly dbName = 'Eugene-Smirnov';

  private readonly storeName = 'users';

  private scoreIndex?: IDBIndex;

  private db?: IDBDatabase;

  constructor() {
    const openRequest = indexedDB.open(this.dbName);
    openRequest.onsuccess = (event) => {
      this.db = (event.target as IDBRequest).result;
    };
    openRequest.onupgradeneeded = (event) => {
      const db = (event.target as IDBRequest).result;
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

  getTopPlayers(): User[] {
    const transaction = this.db?.transaction(this.storeName, 'readonly');
    const users = transaction?.objectStore(this.storeName);
    const scoreIndex = users?.createIndex('score_idx', 'score');
    const result: User[] = [];
    if (scoreIndex) {
      const userArrReq = scoreIndex.getAll();
      userArrReq.onsuccess = () => {
        const userArr = userArrReq.result;
        for (let i = 0; i < 10; i++) {
          result.push(...userArr[i]);
        }
      };
    }
    if (result.length > 10) {
      result.splice(9);
    }
    return result;
  }

  updateUserScore(user: User): void {
    const transaction = this.db?.transaction(this.storeName, 'readwrite');
    const users = transaction?.objectStore(this.storeName);
    if (users) {
      users.put(user);
    }
  }
}
