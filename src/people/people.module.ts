import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleRepository } from './people.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PeopleRepository])],
  providers: [PeopleService],
  controllers: [PeopleController],
})
export class PeopleModule {}
