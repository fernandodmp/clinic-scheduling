import { EntityRepository, Repository } from 'typeorm';
import { Appointment } from './appointment.entity';

@EntityRepository(Appointment)
export class AppointmentsRepository extends Repository<Appointment> {}
