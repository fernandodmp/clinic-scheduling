import { EntityRepository, Repository } from 'typeorm';
import { Appointment } from './appointment.entity';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';
import { PeopleService } from '../people/people.service';
import { TransformedCreateAppointmentDto } from './dtos/transformed-create-appointment.dto';

@EntityRepository(Appointment)
export class AppointmentsRepository extends Repository<Appointment> {
  async createAppointment(
    createAppointmentDto: TransformedCreateAppointmentDto,
  ): Promise<Appointment> {
    const { date, doctor, patient } = createAppointmentDto;

    const appointment = new Appointment();
    appointment.date = date;
    appointment.doctor = doctor;
    appointment.patient = patient;
    appointment.save();

    return appointment;
  }
}
