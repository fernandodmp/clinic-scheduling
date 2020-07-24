import { EntityRepository, Repository } from 'typeorm';
import { Person } from './person.entity';
import { CreatePersonDto } from './dtos/create-person.dto';
import { personFactory } from './person.factory';

@EntityRepository(Person)
export class PeopleRepository extends Repository<Person> {
  async createPerson(createPersonDto: CreatePersonDto): Promise<Person> {
    const person = personFactory.create(createPersonDto);

    const { firstName, lastName, cpf } = createPersonDto;
    person.firstName = firstName;
    person.lastName = lastName;
    person.cpf = cpf;
    await person.save();

    return person;
  }
}
