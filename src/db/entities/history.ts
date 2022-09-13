/* eslint-disable no-use-before-define */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Dismissed } from './dismissed'
import { Equipment } from './equipment'
import { OrderService } from './order-service'

@Entity()
export class History {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'jsonb',
    name: 'equipment_snapshot'
  })
  equipmentSnapshot: any

  @OneToMany(() => OrderService, (orderService) => orderService.equipment)
  orderServices: OrderService[]

  @OneToMany(() => Dismissed, (dismissed) => dismissed.equipment)
  dismisseds: Dismissed[]

  @OneToOne(() => Equipment)
  @JoinColumn()
  equipment: Equipment

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  createdAt: Date

  @Column({ type: 'timestamptz' })
  @UpdateDateColumn()
  updatedAt: Date
}
