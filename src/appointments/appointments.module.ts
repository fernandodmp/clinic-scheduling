import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentsRepository } from './appointments.repository';
import { PeopleModule } from '../people/people.module';
@Module({
  imports: [TypeOrmModule.forFeature([AppointmentsRepository]), PeopleModule],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}
