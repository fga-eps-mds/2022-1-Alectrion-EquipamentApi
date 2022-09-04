/* eslint-disable no-use-before-define */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Unit } from './unit'

@Entity()
export class OrderService {
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
    type: 'varchar',
    name: 'sender'
  })
  sender: string

  @Column({
    type: 'varchar',
    name: 'sender_functional_number'
  })
  senderFunctionalNumber: string

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  createdAt: Date

  @Column({ type: 'timestamptz' })
  @UpdateDateColumn()
  updatedAt: Date

  @OneToOne(() => Unit)
  @JoinColumn()
  destination: Unit
}
