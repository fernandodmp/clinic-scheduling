import { Injectable, BadRequestException } from '@nestjs/common';
import { AppointmentsRepository } from './appointments.repository';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PeopleService } from '../people/people.service';
import { Doctor } from '../people/person.entity';
import { TransformedCreateAppointmentDto } from './dtos/transformed-create-appointment.dto';
import { Appointment } from './appointment.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(AppointmentsRepository)
    private appointmentRepository: AppointmentsRepository,
    private peopleService: PeopleService,
  ) {}

  async createAppointment(
    createAppointmentDto: CreateAppointmentDto,
  ): Promise<Appointment> {
    const { date, doctorId, patientId } = createAppointmentDto;
    const patient = await this.peopleService.findPerson(patientId);

    if (!patient) {
      throw new BadRequestException('Invalid Patient');
    }

    const doctor = await this.peopleService.findPerson(doctorId);

    if (!doctor || !(doctor instanceof Doctor)) {
      console.log(doctor);
      throw new BadRequestException('Invalid Doctor');
    }

    const newDto = new TransformedCreateAppointmentDto();
    newDto.date = date;
    newDto.doctor = doctor;
    newDto.patient = patient;

    return this.appointmentRepository.createAppointment(newDto);
  }
}
