import { Controller, Post, Body } from '@nestjs/common';
import { CreatePersonDto } from './dtos/create-person.dto';
import { Person } from './person.entity';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}

  @Post()
  async createPerson(
    @Body() createPersonDto: CreatePersonDto,
  ): Promise<Person> {
    return this.peopleService.createPerson(createPersonDto);
  }
}
