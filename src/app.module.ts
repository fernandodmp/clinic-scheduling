import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AppointmentsModule } from './appointments/appointments.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AppointmentsModule,
    PeopleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
