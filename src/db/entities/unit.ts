import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Equipment } from './equipament'
import { SubUnit } from './subUnit'

@Entity()
export class Unit {
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

  @OneToMany(() => SubUnit, (SubUnit) => SubUnit.unit)
  subUnit: SubUnit[]

  @OneToMany(() => Equipment, (equipament) => equipament.unit)
  equipment: Equipment[]
}
