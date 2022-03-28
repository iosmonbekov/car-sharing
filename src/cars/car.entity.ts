import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  number: string;
}