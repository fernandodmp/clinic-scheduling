import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dtos/create-person.dto';
import { Person } from './person.entity';
import { PeopleRepository } from './people.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from 'src/appointments/appointment.entity';
import { GetScheduleDto } from './dtos/get-schedule.dto';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(PeopleRepository)
    private peopleRepository: PeopleRepository,
  ) {}

  async findPerson(id: number): Promise<Person> {
    return await this.peopleRepository.findOne(id);
  }

  async createPerson(createPersonDto: CreatePersonDto): Promise<Person> {
    return this.peopleRepository.createPerson(createPersonDto);
  }

  async getSchedule(id: number): Promise<GetScheduleDto> {
    return this.peopleRepository.getSchedule(id);
  }
}
