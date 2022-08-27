/* eslint-disable no-use-before-define */
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { ScreenType } from './equipamentEnum/screenType'
import { Status } from './equipamentEnum/status'
import { StorageType } from './equipamentEnum/storageType'
import { Type } from './equipamentEnum/type'
import { Unit } from './unit'

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  tipping_number: string

  @Column()
  acquision: string

  @Column({
    type: 'enum',
    enum: Type
  })
  type: Type

  @Column({
    type: 'enum',
    enum: Type
  })
  status: Status

  @Column()
  model: string

  @Column()
  unit_id: string

  @Column()
  description: string

  @Column()
  brand: string

  @Column()
  initial_use_date: string

  @Column()
  screen_size: string

  @Column()
  invoice_number: string

  @Column()
  power?: string

  @Column({
    type: 'enum',
    enum: ScreenType
  })
  screenType: ScreenType

  @Column()
  processador: string

  @Column({
    type: 'enum',
    enum: StorageType
  })
  storage_type: StorageType

  @Column()
  storage_amount?: string

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  createdAt: Date

  @Column({ type: 'timestamptz' })
  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => Unit, (unit) => unit.equipment)
  unit: Unit
}
