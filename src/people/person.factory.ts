import { CreatePersonDto } from './dtos/create-person.dto';
import { Person, Doctor } from './person.entity';
import { PersonType } from './person-type.enum';

class PersonFactory {
  create(createPersonDto: CreatePersonDto): Person {
    if (createPersonDto.type === PersonType.DOCTOR) {
      return new Doctor();
    }

    return new Person();
  }
}

export const personFactory = new PersonFactory();
