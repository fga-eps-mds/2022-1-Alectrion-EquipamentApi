/* eslint-disable n/no-path-concat */
import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  database: process.env.DATABASE,
  password: process.env.PASS,
  synchronize: true,
  port: Number(process.env.DB_PORT),
  migrationsRun: true,
  entities: [__dirname + '/entities/*{.ts, .js}'],
  migrations: [__dirname + '/migrations/*{.ts, .js}']
})
