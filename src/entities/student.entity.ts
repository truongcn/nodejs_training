
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Name: string;

  @Column()
  Age: number;

  @Column()
  Email: string;
}
