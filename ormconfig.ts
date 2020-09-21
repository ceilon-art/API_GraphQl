import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'data/dev.db',
  logging: true,
  entities: [path.resolve(__dirname, 'src', 'db', 'models', '*')],
  migrations: [path.resolve(__dirname, 'src', 'db', 'migrations', '*')],
};

module.exports = options;
