/* eslint-disable no-use-before-define */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Equipment } from './equipament'
import { History } from './history'
import { Unit } from './unit'

@Entity()
export class Dismissed {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    name: 'date',
    type: 'date'
  })
  date: Date

  @Column({
    name: 'description',
    type: 'varchar'
  })
  description: string

  @Column({
    type: 'uuid',
    name: 'author_id'
  })
  authorId: string

  @Column({
    type: 'jsonb',
    name: 'equipment_snapshot'
  })
  equipmentSnapshot: any

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  createdAt: Date

  @Column({ type: 'timestamptz' })
  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => Equipment, (equipment) => equipment.dismisseds)
  equipment: Equipment

  @ManyToOne(() => History, (history) => history.dismisseds)
  history: History

  @OneToOne(() => Unit)
  @JoinColumn()
  destination: Unit
}
