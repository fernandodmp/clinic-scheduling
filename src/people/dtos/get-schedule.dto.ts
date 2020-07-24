import { Appointment } from '../../appointments/appointment.entity';
export class GetScheduleDto {
  appointments: Appointment[];
  appointmentsAsDoctor!: Appointment[];
}
