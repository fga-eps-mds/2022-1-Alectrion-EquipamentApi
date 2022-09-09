/* eslint-disable no-use-before-define */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Equipment } from './equipament'

@Entity()
export class EquipmentAcquisition {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    name: 'name',
    type: 'varchar'
  })
  name: string

  @OneToMany(() => Equipment, (equipment) => equipment.brand)
  equipment: Equipment[]
}
