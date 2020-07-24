import { Controller, Post, Body } from '@nestjs/common';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './appointment.entity';

@Controller('appointments')
export class AppointmentsController {
  constructor(private appointmentsService: AppointmentsService) {}

  @Post()
  async createAppointment(
    @Body() createAppointmentDto: CreateAppointmentDto,
  ): Promise<Appointment> {
    return this.appointmentsService.createAppointment(createAppointmentDto);
  }
}
