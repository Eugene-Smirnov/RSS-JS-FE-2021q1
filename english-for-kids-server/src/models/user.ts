import { v4 as uuidv4 } from 'uuid';
import { CreatedUserDto } from '../dto/created-user';

export class User {
  constructor(public login: string, public password: string, public id: string = uuidv4()) {}

  toDto(): CreatedUserDto {
    const { password: _, ...dto } = this;
    return dto;
  }
}
