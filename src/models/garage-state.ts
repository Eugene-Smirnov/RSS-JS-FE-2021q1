export interface GarageState extends Record<string, string | number | boolean> {
  total: number;
  _limit: number;
  _page: number;
}
