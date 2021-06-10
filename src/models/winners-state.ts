export interface WinnersState
  extends Record<string, string | number | boolean> {
  total: number;
  limit: number;
  page: number;
  sort: 'id' | 'wins' | 'time';
  order: 'ASC' | 'DESC';
}
