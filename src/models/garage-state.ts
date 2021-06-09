export interface GarageState extends Record<string, string | number | boolean> {
  total: number;
  limit: number;
  page: number;
}
