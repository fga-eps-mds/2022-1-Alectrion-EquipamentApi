/* eslint-disable no-use-before-define */
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Unit } from './unit'

@Entity()
export class SubUnit {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  localization: string

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  createdAt: Date

  @Column({ type: 'timestamptz' })
  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => SubUnit, (subUnit) => subUnit.children)
  parent: SubUnit

  @OneToMany(() => SubUnit, (subUnit) => subUnit.parent)
  children: SubUnit[]

  @ManyToOne(() => Unit, (unit) => unit.subUnit)
  unit: Unit
}
