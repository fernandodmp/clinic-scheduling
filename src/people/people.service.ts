import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dtos/create-person.dto';
import { Person } from './person.entity';
import { PeopleRepository } from './people.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(PeopleRepository)
    private peopleRepository: PeopleRepository,
  ) {}

  async createPerson(createPersonDto: CreatePersonDto): Promise<Person> {
    return this.peopleRepository.createPerson(createPersonDto);
  }
}
