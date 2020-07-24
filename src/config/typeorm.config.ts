import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: __dirname + '/../../data/db.sqlite',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
};
