export interface Repository<T = any, R = any> {
  create(entity: R): Promise<T>;
  get(id: string): Promise<T | null>;
  getByName?(name: string): Promise<T | null>;
  getAll?(): Promise<T[]>;
  update?(id: string, entity: Partial<R>): Promise<T | null>;
  remove?(id: string): Promise<T | null>;
}
