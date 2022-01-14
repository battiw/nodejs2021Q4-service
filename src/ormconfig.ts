import 'reflect-metadata';
import { ConnectionOptions } from 'typeorm';

export = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'qwer',
  database: 'servis', // название базы данных
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
} as ConnectionOptions;
