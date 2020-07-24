import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  TableInheritance,
  Unique,
} from 'typeorm';
import { Appointment } from '../appointments/appointment.entity';
import { ChildEntity } from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
@Unique(['cpf'])
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  cpf: string;

  @OneToMany(
    type => Appointment,
    appointment => appointment.patient,
  )
  appointments: Appointment[];
}

@ChildEntity()
export class Doctor extends Person {
  @OneToMany(
    type => Appointment,
    appointment => appointment.doctor,
  )
  appointmentsAsDoctor: Appointment[];
}
