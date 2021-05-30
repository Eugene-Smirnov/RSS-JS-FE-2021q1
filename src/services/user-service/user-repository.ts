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

  async getAllUsers(): Promise<User[]> {
    return new Promise((res, rej) => {
      const transaction = this.db?.transaction(this.storeName, 'readwrite');
      const users = transaction?.objectStore(this.storeName);
      if (users) {
        const usersArrReq = users.getAll();
        usersArrReq.onsuccess = () => {
          res(usersArrReq.result);
        };
      } else {
        rej();
      }
    });
  }

  // async getTopPlayers(): Promise<User[]> {
  //   return new Promise((res, rej) => {
  //     const transaction = this.db?.transaction(this.storeName, 'readwrite');
  //     const users = transaction?.objectStore(this.storeName);
  //     // const scoreIndex = users?.createIndex('score_idx', 'score');
  //     const result: User[] = [];
  //     if (users) {
  //       const userArrReq = users.getAll();
  //       userArrReq.onsuccess = () => {
  //         const userArr = userArrReq.result;
  //         for (let i = 0; i < 10; i++) {
  //           if (Array.isArray(userArr[i])) {
  //             result.push(...userArr[i]);
  //           } else {
  //             result.push(userArr[i]);
  //           }
  //         }
  //       };
  //     } else {
  //       rej();
  //     }
  //     if (result.length > 10) {
  //       result.slice(9);
  //     }
  //     res(result);
  //   });
  // }

  updateUserScore(user: User): void {
    const transaction = this.db?.transaction(this.storeName, 'readwrite');
    const users = transaction?.objectStore(this.storeName);
    if (users) {
      users.put(user);
    }
  }
}
