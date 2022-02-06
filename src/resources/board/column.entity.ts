import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Columns {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  order: number;
}
