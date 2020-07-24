import { Doctor, Person } from '../../people/person.entity';
export class TransformedCreateAppointmentDto {
  date: Date;
  doctor: Doctor;
  patient: Person;
}
