import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: __dirname + '/../../data',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
};
