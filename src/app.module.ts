import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AppointmentsModule } from './appointments/appointments.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, AppointmentsModule, PeopleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
