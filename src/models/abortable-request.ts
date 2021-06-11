export interface AbortableRequest<T = unknown> {
  request(): Promise<T>;
  abort(): void;
}
