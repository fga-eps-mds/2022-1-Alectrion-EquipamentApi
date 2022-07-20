/* eslint-disable n/no-path-concat */
import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  database: 'equipament',
  password: 'docker',
  synchronize: true,
  port: 5433,
  migrationsRun: true,
  entities: [__dirname + '/entities/*{.ts, .js}'],
  migrations: [__dirname + '/migrations/*{.ts, .js}']
})
