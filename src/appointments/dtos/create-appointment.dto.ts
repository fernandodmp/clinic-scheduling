import { Doctor, Person } from '../../people/person.entity';

export interface CreateAppointmentDto {
  date: Date;
  doctorId: number;
  patientId: number;
}
