/* eslint-disable no-use-before-define */
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Dismissed } from './dismissed'
import { OrderService } from './order-service'

@Entity()
export class History {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    name: 'date',
    type: 'date'
  })
  date: Date

  @Column({
    type: 'jsonb',
    name: 'equipment_snapshot'
  })
  equipmentSnapshot: any

  @OneToMany(() => OrderService, (orderService) => orderService.equipment)
  orderServices: OrderService[]

  @OneToMany(() => Dismissed, (dismissed) => dismissed.equipment)
  dismisseds: Dismissed[]

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  createdAt: Date

  @Column({ type: 'timestamptz' })
  @UpdateDateColumn()
  updatedAt: Date
}
