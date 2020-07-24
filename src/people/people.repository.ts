import { EntityRepository, Repository } from 'typeorm';
import { Person, Doctor } from './person.entity';
import { CreatePersonDto } from './dtos/create-person.dto';
import { personFactory } from './person.factory';
import { Appointment } from 'src/appointments/appointment.entity';
import { GetScheduleDto } from './dtos/get-schedule.dto';

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

  async getSchedule(id: number): Promise<GetScheduleDto> {
    const person = await this.findOne(id, {
      relations: [
        'appointments',
        'appointmentsAsDoctor',
        'appointments.doctor',
        'appointmentsAsDoctor.patient',
      ],
    });
    const schedule = new GetScheduleDto();
    schedule.appointments = person.appointments;

    if (person instanceof Doctor) {
      schedule.appointmentsAsDoctor = person.appointmentsAsDoctor;
    }

    return schedule;
  }
}
