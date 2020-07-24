import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from 'typeorm';

import { Person, Doctor } from '../people/person.entity';

@Entity()
export class Appointment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(
    type => Person,
    patient => patient.appointments,
  )
  patient: Person;

  @ManyToOne(
    type => Doctor,
    doctor => doctor.appointmentsAsDoctor,
  )
  doctor: Doctor;
}
