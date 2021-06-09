export interface CarModel {
  name: string;
  color: string;
  id?: number;
}

export class Car implements CarModel {
  name: string;

  color: string;

  id?: number;

  constructor(name: string, color: string, id?: number) {
    this.name = name;
    this.color = color;
    if (id) this.id = id;
  }
}
