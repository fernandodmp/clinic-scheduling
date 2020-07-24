import { PersonType } from '../person-type.enum';

export interface CreatePersonDto {
  firstName: string;
  lastName: string;
  cpf: string;
  type: PersonType;
}
