import 'reflect-metadata';
import { ConnectionOptions } from 'typeorm';
import { config } from './common/config';

export = {
  type: 'postgres',
  host: config.POSTGRES_HOST || 'postgres',
  port: Number(config.POSTGRES_PORT) || '5432',
  username: config.POSTGRES_USER || 'postgres',
  password: config.POSTGRES_PASSWORD || 'postgres',
  database: config.POSTGRES_DB || 'postgres',
  synchronize: false,
  dropSchema: false,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  // subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
    // subscribersDir: 'src/subscriber',
  },
} as ConnectionOptions;
