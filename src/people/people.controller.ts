import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreatePersonDto } from './dtos/create-person.dto';
import { Person } from './person.entity';
import { PeopleService } from './people.service';
import { GetScheduleDto } from './dtos/get-schedule.dto';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}

  @Post()
  async createPerson(
    @Body() createPersonDto: CreatePersonDto,
  ): Promise<Person> {
    return this.peopleService.createPerson(createPersonDto);
  }

  @Get('schedules/:id')
  async getSchedule(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<GetScheduleDto> {
    return this.peopleService.getSchedule(id);
  }
}
